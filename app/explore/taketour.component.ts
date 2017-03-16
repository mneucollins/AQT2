import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/explore/taketour.component.html',
    styleUrls: ['app/explore/taketour.component.css']
})

export class TakeTourComponent{
    constructor ( private _router: Router){};

    onViewTour(): void {
        this._router.navigate(['/view_tour']);
        // note: this is sandbox version
        // final version should pass a parameter to identify the tour
    }

}
