import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { GlobalNavComponent } from '../shared/globalnav.component';

import { ExploreComponent } from './explore.component';

@NgModule({
    declarations:[
        ExploreComponent,
        // GlobalNavComponent
        // ExploreQuiltComponent,
        // ExploreRandomComponent,
    ],

    imports:[
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            { path: 'explore', component: ExploreComponent },
            // { path: 'explore_the_quilt', component: ExploreTheQuiltComponent },
            // { path: 'exploreRandom', component: ExploreRandomComponent }
        ])
    ],
    providers:[]
})

export class ExploreModule {}