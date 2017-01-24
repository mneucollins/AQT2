import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';

@NgModule({
  imports: [ 
    BrowserModule ,
    RouterModule.forRoot ([
      { path: 'home', component: HomeComponent },
      { path: 'start', component: StartComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],

  declarations: [ 
    AppComponent,
    HomeComponent,
    StartComponent
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
