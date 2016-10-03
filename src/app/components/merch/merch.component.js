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
const merch_service_1 = require('../../services/merch.service');
let MerchComponent = class MerchComponent {
    constructor(merchService) {
        this.merchService = merchService;
    }
    ngOnInit() {
        this.getMerch();
    }
    getMerch() {
        this.merchService.getMerch()
            .then((merch) => this.merch = merch);
    }
};
MerchComponent = __decorate([
    core_1.Component({
        selector: 'merch',
        templateUrl: './merch.component.html',
        styleUrls: ['./merch.component.scss'],
        providers: [merch_service_1.MerchService]
    }), 
    __metadata('design:paramtypes', [merch_service_1.MerchService])
], MerchComponent);
exports.MerchComponent = MerchComponent;
//# sourceMappingURL=merch.component.js.map