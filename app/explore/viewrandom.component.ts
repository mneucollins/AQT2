import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { PanelService } from '../services/panel.service';

@Component({
    templateUrl: 'app/explore/viewrandom.component.html',
    styleUrls: ['app/explore/viewrandom.component.css'],
    providers: [PanelService],
})

export class ViewRandomComponent implements OnInit{

    panel: HTMLImageElement;

    constructor ( private _router: Router, private PanelService: PanelService){};

    ngOnInit(): void {
        this.getPanel();
    }

    getPanel(): void {
        this.panel = this.PanelService.getRandomPanel();
        //this.PanelService.getRandomPanel().then(panel => this.panel = panel)
        //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
      }

}
