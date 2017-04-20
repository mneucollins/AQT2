import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'

import { SharedModule } from '../shared/shared.module';

import { AidsActivismComponent } from './aids_activism/aids_activism.component';
// import { ExploreQuiltComponent } from './explorequilt.component';
// import { ExploreStoriesComponent } from './explorestories.component';
// import { ViewRandomComponent } from './viewrandom.component';
// import { TakeTourComponent } from './taketour.component';
// import { ViewTourComponent } from './viewtour.component';
// import { FindANameComponent } from './findaname.component';
// import { FindMoreOptionsComponent } from './findmoreoptions.component';



@NgModule({
    declarations:[
        AidsActivismComponent,
        // ExploreQuiltComponent,
        // ExploreStoriesComponent,
        // ViewRandomComponent,
        // TakeTourComponent,
        // ViewTourComponent,
        // FindANameComponent,
        // FindMoreOptionsComponent,
        // ExploreRandomComponent,
    ],

    imports:[
        HttpModule,
        SharedModule,
        RouterModule.forChild([
            { path: 'aids_activism', component: AidsActivismComponent },
            // { path: 'explore_the_quilt', component: ExploreQuiltComponent },
            // { path: 'explore_stories', component: ExploreStoriesComponent },
            // { path: 'view_random', component: ViewRandomComponent },
            // { path: 'take_a_tour', component: TakeTourComponent },
            // { path: 'view_tour', component: ViewTourComponent },
            // { path: 'find_a_name', component: FindANameComponent },
            // { path: 'find_more_options', component: FindMoreOptionsComponent },
            // { path: 'exploreRandom', component: ExploreRandomComponent }
        ])
    ],
    providers:[]
})

export class ThreadsModule {}
