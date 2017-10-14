import { Component, OnInit } from '@angular/core';
import { TennisPlayer } from './tennis-player'
import { PlayerService } from './player.service'

@Component({
  selector: 'players',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  template: `
      <ul class="players">
        <li [class.selected-player]="plr === selectedPlayer" *ngFor="let plr of players"  (click)="onSelect(plr)">
          {{plr.lastName}}
        </li>
      </ul>

      <!-- [player] is an INPUT property and requires importing Input artifact in the detail component -->
      <player-detail [player]="selectedPlayer" ></player-detail>
      `, 

  // Declaring provider so PlayerService is always created once when the component is created
  providers : []
})

export class PlayersComponent implements OnInit {

  // Creating private constructor for Dependency Injection
  constructor(private playerService : PlayerService) {}

  players : TennisPlayer[];
  selectedPlayer : TennisPlayer;

  onSelect(player : TennisPlayer): void {
    this.selectedPlayer = player;
  }

  getPlayers() : void {
    this.playerService.getPlayers().then( plrs => this.players = plrs )
  }

  ngOnInit() : void  {
    this.getPlayers();
  }

}


