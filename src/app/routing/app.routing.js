"use strict";
const router_1 = require('@angular/router');
const home_component_1 = require('../components/home/home.component');
const members_component_1 = require('../components/members/members.component');
const appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: '/members',
        component: members_component_1.MembersComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map