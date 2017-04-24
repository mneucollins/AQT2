import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'

import { SharedModule } from '../shared/shared.module';

import { AidsActivism01Component } from './aids_activism/aids_activism_01.component';
import { AidsActivism02Component } from './aids_activism/aids_activism_02.component';



@NgModule({
    declarations:[
        AidsActivism01Component,
        AidsActivism02Component,
    ],

    imports:[
        HttpModule,
        SharedModule,
        RouterModule.forChild([
            { path: 'aids_activism_01', component: AidsActivism01Component },
            { path: 'aids_activism_02', component: AidsActivism02Component },
        ])
    ],
    providers:[]
})

export class ThreadsModule {}
