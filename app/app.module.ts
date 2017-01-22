import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [ 
    BrowserModule ,
    RouterModule.forRoot ([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],

  declarations: [ 
    AppComponent,
    HomeComponent
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
