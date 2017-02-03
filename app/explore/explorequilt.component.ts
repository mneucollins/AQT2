import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/explore/explorequilt.component.html',
    styleUrls: ['app/explore/explorequilt.component.css']
})

export class ExploreQuiltComponent{
    constructor ( private _router: Router){};

    onRandom(): void {
        this._router.navigate(['/explore_the_quilt']);
    }
}