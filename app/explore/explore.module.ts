import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
// CommonModule is now imported from SharedModule
import { SharedModule } from '../shared/shared.module';
import { ExploreComponent } from './explore.component';
import { ExploreQuiltComponent } from './explorequilt.component';
import { ViewRandomComponent } from './viewrandom.component';


@NgModule({
    declarations:[
        ExploreComponent,
        ExploreQuiltComponent,
        ViewRandomComponent
        // ExploreRandomComponent,
    ],

    imports:[
        FormsModule,
        // CommonModule,
        SharedModule,
        RouterModule.forChild([
            { path: 'explore', component: ExploreComponent },
            { path: 'explore_the_quilt', component: ExploreQuiltComponent },
            { path: 'view_random', component: ViewRandomComponent },
            // { path: 'exploreRandom', component: ExploreRandomComponent }
        ])
    ],
    providers:[]
})

export class ExploreModule {}
