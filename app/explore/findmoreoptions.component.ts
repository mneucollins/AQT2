import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/explore/findmoreoptions.component.html',
    styleUrls: ['app/explore/findmoreoptions.component.css']
})

export class FindMoreOptionsComponent{
    constructor ( private _router: Router){};

    onFewerOptions(): void {}

}
