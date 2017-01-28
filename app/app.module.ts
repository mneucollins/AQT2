import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { GlobalNavComponent } from './shared/globalnav.component';

import { ExploreModule } from './explore/explore.module';

@NgModule({
  imports: [ 
    BrowserModule ,
    RouterModule.forRoot ([
      { path: 'home', component: HomeComponent },
      { path: 'start', component: StartComponent },
      // { path: 'favorite', component: FavoriteComponent },
      // { path: 'stitch', component: StitchComponent },
      // { path: 'tour', component: TourComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
    ExploreModule
  ],
  

  declarations: [ 
    AppComponent,
    HomeComponent,
    StartComponent,
    GlobalNavComponent,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
