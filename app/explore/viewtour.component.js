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
var ViewTourComponent = (function () {
    function ViewTourComponent(_router) {
        this._router = _router;
    }
    ;
    ViewTourComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/explore/viewtour.component.html',
            styleUrls: ['app/explore/viewtour.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ViewTourComponent);
    return ViewTourComponent;
}());
exports.ViewTourComponent = ViewTourComponent;
//# sourceMappingURL=viewtour.component.js.map