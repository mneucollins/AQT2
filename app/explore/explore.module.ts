import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore.component';

@NgModule({
    declarations:[
        ExploreComponent,
        // ExploreQuiltComponent,
        // ExploreRandomComponent,
    ],

    imports:[
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            { path: 'explore', component: ExploreComponent },
            // { path: 'exploreQuilt', component: ExploreQuiltComponent },
            // { path: 'exploreRandom', component: ExploreRandomComponent }
        ])
    ],
    providers:[]
})

export class ExploreModule {}