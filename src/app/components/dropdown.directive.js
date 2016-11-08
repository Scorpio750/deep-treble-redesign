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
let DropdownDirective = class DropdownDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    onClick() {
        this.toggleDropdown();
    }
    toggleDropdown() {
    }
};
__decorate([
    core_1.HostListener(''), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], DropdownDirective.prototype, "onClick", null);
DropdownDirective = __decorate([
    core_1.Directive({ selector: 'dropdown' }), 
    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
], DropdownDirective);
exports.DropdownDirective = DropdownDirective;
let DropdownContentDirective = class DropdownContentDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    onMouseLeave() {
        this.display('none');
    }
    display(state) {
        this.renderer.setElementStyle(this.el.nativeElement, 'display', state);
    }
};
__decorate([
    core_1.HostListener('mouseleave'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], DropdownContentDirective.prototype, "onMouseLeave", null);
DropdownContentDirective = __decorate([
    core_1.Directive({ selector: 'dropdown-content' }), 
    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
], DropdownContentDirective);
exports.DropdownContentDirective = DropdownContentDirective;
//# sourceMappingURL=dropdown.directive.js.map