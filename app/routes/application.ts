import Route from '@ember/routing/route';
import { DEBUG } from '@glimmer/env';
import { registerDestructor } from '@ember/destroyable';

export default class ApplicationRoute extends Route {
  async beforeModel() {
    // Don't include MSW in production, only in DEBUG (tests, development)
    if (DEBUG) {
      await setupMSW(this);
    }
  }

  async model() {
    const response = await fetch('/users');
    const json = await response.json();

    return { users: json };
  }
}

async function setupMSW(context: ApplicationRoute) {
  const { worker } = await import('/mocks/browser.ts');
  await worker.start();

  // Prevent duplication in tests,
  // where the app is setup and torn down a lot
  registerDestructor(context, () => worker.stop());
}
