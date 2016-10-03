"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const core_2 = require('@angular/core');
const members_service_1 = require('../../services/members.service');
let MembersComponent = class MembersComponent {
    constructor(membersService) {
        this.membersService = membersService;
    }
    get routeAnimation() {
        return true;
    }
    ngOnInit() {
        this.getMembers();
    }
    getMembers() {
        this.membersService.getMembers()
            .then((members) => this.members = members);
    }
};
__decorate([
    core_1.HostBinding('@routeAnimation'), 
    __metadata('design:type', Object)
], MembersComponent.prototype, "routeAnimation", null);
MembersComponent = __decorate([
    core_1.Component({
        selector: 'members',
        templateUrl: './members.component.html',
        styleUrls: ['./members.component.scss'],
        animations: [
            core_2.trigger('routeAnimation', [
                core_2.state('*', core_2.style({
                    opacity: 1
                })),
                core_2.transition('void => *', [
                    core_2.style({
                        opacity: 0
                    }),
                    core_2.animate('1.5s ease-in-out')
                ]),
                core_2.transition('* => void', [
                    core_2.animate('1.5s ease-out', core_2.style({
                        opacity: 0
                    }))
                ])
            ])
        ]
    }), 
    __metadata('design:paramtypes', [members_service_1.MembersService])
], MembersComponent);
exports.MembersComponent = MembersComponent;
//# sourceMappingURL=members.component.js.map