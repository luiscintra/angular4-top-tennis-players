import { Component, OnInit } from '@angular/core'

import { TennisPlayer } from './tennis-player'
import { PlayerService } from './player.service'

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
}) 
export class DashboardComponent implements OnInit {

    constructor(private playerService: PlayerService) {

    }

    players : TennisPlayer[] = [];

    getPlayers(): void {
        this.playerService.getPlayers().then( plrs => this.players = plrs.slice(0, 5) );
    }

    ngOnInit():void {
        this.getPlayers();
    }

}