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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var panel_service_1 = require('../services/panel.service');
var ViewRandomComponent = (function () {
    function ViewRandomComponent(_router, PanelService) {
        this._router = _router;
        this.PanelService = PanelService;
    }
    ;
    ViewRandomComponent.prototype.ngOnInit = function () {
        this.getPanel();
    };
    ViewRandomComponent.prototype.getPanel = function () {
        this.panel = this.PanelService.getRandomPanel();
        //this.PanelService.getRandomPanel().then(panel => this.panel = panel)
        //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    };
    ViewRandomComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/explore/viewrandom.component.html',
            styleUrls: ['app/explore/viewrandom.component.css'],
            providers: [panel_service_1.PanelService],
        }), 
        __metadata('design:paramtypes', [router_1.Router, panel_service_1.PanelService])
    ], ViewRandomComponent);
    return ViewRandomComponent;
}());
exports.ViewRandomComponent = ViewRandomComponent;
//# sourceMappingURL=viewrandom.component.js.map