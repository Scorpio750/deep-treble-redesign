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
let HomeComponent = class HomeComponent {
    constructor() {
        this.greeting = {
            header: "Welcome to Deep Treble's Webpage",
            body: "Please excuse our appearance as we build our new website!"
        };
    }
    get routeAnimation() {
        return true;
    }
};
__decorate([
    core_1.HostBinding('@routeAnimation'), 
    __metadata('design:type', Object)
], HomeComponent.prototype, "routeAnimation", null);
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss'],
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
    __metadata('design:paramtypes', [])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map