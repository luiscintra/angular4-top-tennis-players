import { Component } from '@angular/core';
import { TennisPlayer } from './tennis-player'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
      <h1>{{title}}</h1> 

      <h2>Top 10 Tennis Players:</h2>
      <ul class="players">
        <li [class.selected-player]="plr === selectedPlayer" *ngFor="let plr of players"  (click)="onSelect(plr)">
          {{plr.lastName}}
        </li>
      </ul>

      <!-- [player] is an INPUT property and requires importing Input artifact in the detail component -->
      <player-detail [player]="selectedPlayer" ></player-detail>
      `
})

export class AppComponent {
  title = 'Top Tennis Players';
  players = TENNIS_PLAYERS;
  selectedPlayer : TennisPlayer;

  onSelect(player : TennisPlayer): void {
    this.selectedPlayer = player;
  }

}

const TENNIS_PLAYERS : TennisPlayer[] = [
  { id: 1,  firstName: "Andy",     lastName: "Murray",   currentRanking: 1 },
  { id: 2,  firstName: "Rafael",   lastName: "Nadal",    currentRanking: 2 },
  { id: 3,  firstName: "Stan",     lastName: "Wawrinka", currentRanking: 3 },
  { id: 4,  firstName: "Novak",    lastName: "Djokovic", currentRanking: 4 },
  { id: 5,  firstName: "Roger",    lastName: "Federer",  currentRanking: 5 },
  { id: 6,  firstName: "Milos",    lastName: "Raonic",   currentRanking: 6 },
  { id: 7,  firstName: "Marin",    lastName: "Cilic",    currentRanking: 7 },
  { id: 8,  firstName: "Dominic",  lastName: "Thiem",    currentRanking: 8 },
  { id: 9,  firstName: "Kei",      lastName: "Nishikori", currentRanking: 9 },
  { id: 10, firstName: "Jo-Wilfried", lastName: "Tsonga", currentRanking: 10 }
];
