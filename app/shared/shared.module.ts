import { NgModule } from '@angular/core';
import { GlobalNavComponent } from './globalnav.component';
import { CommonModule } from '@angular/common';

@NgModule ({
    declarations: [ GlobalNavComponent ],
    imports: [ CommonModule ],
    exports: [
        CommonModule,
        GlobalNavComponent
    ]
})

export class SharedModule {}