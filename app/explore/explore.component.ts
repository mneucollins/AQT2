import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/explore/explore.component.html',
    styleUrls: ['app/explore/explore.component.css']
})

export class ExploreComponent{
    constructor ( private _router: Router){};

    onExploreTheQuilt(): void {
        this._router.navigate(['/explore_the_quilt']);
    }

    onGoMyQuilt(): void {

    }

}
