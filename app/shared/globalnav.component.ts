import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'globalnav',
    templateUrl: 'app/shared/globalnav.component.html',
    styleUrls: ['app/shared/globalnav.component.css']
})

export class GlobalNavComponent {
    //global routing is in the app.module
    constructor ( private _router: Router, private _location: Location ){};
    
    onHome(): void {
        this._router.navigate(['/home']);
    }
    onBack(): void {
        this._location.back();
    }
}        
