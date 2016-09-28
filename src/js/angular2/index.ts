/// <reference path="../../../node_modules/typescript/lib/lib.es6.d.ts" />

import 'zone.js/dist/zone';
import 'reflect-metadata';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MyAppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(MyAppModule)
