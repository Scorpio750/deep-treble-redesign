"use strict";
const router_1 = require('@angular/router');
const home_component_1 = require('../components/home/home.component');
const members_component_1 = require('../components/members/members.component');
const history_component_1 = require('../components/history/history.component');
const media_component_1 = require('../components/media/media.component');
const merch_component_1 = require('../components/merch/merch.component');
const aaru_component_1 = require('../components/aaru/aaru.component');
const appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'members',
        component: members_component_1.MembersComponent
    },
    {
        path: 'history',
        component: history_component_1.HistoryComponent
    },
    {
        path: 'media',
        component: media_component_1.MediaComponent
    },
    {
        path: 'merch',
        component: merch_component_1.MerchComponent
    },
    {
        path: 'AARU',
        component: aaru_component_1.AARUComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map