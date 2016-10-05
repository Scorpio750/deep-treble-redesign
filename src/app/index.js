"use strict";
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
const core_1 = require('@angular/core');
const app_module_1 = require('./modules/app.module');
const platform = platform_browser_dynamic_1.platformBrowserDynamic();
core_1.enableProdMode();
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=index.js.map