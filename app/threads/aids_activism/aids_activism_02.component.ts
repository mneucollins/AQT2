import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/threads/aids_activism/aids_activism_02.component.html',
    styleUrls: [
        'app/threads/aids_activism/aids_activism_base.css',
        'app/threads/aids_activism/aids_activism_02.component.css',
    ]
})

export class AidsActivism02Component{
    constructor ( private _router: Router){};
    
    onNavForward(): void {
        this._router.navigate(['/aids_activism_03']);
    }
    onNavBack(): void {
        this._router.navigate(['/aids_activism_01']);
    }

}