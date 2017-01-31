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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
// import { CommonModule } from '@angular/common';
// CommonModule is now imported from SharedModule
var shared_module_1 = require('../shared/shared.module');
var explore_component_1 = require('./explore.component');
var ExploreModule = (function () {
    function ExploreModule() {
    }
    ExploreModule = __decorate([
        core_1.NgModule({
            declarations: [
                explore_component_1.ExploreComponent,
            ],
            imports: [
                forms_1.FormsModule,
                // CommonModule,
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild([
                    { path: 'explore', component: explore_component_1.ExploreComponent },
                ])
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], ExploreModule);
    return ExploreModule;
}());
exports.ExploreModule = ExploreModule;
//# sourceMappingURL=explore.module.js.map