import Application from 'fresh-embroider-app-with-mswjs-data/app';
import config from 'fresh-embroider-app-with-mswjs-data/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
