import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    templateUrl: 'app/start/start.component.html',
    styleUrls: ['app/start/start.component.css']
})

export class StartComponent{
    pageTitle: 'AQT Start';
    constructor ( private _router: Router){};

    onExplore(): void {
        this._router.navigate(['/explore']);
    }

    onMyQuilt(): void {
        this._router.navigate(['/my_quilt']);
    }
}
