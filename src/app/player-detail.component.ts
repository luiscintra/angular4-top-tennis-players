import { Component, Input } from '@angular/core'
import { TennisPlayer } from './tennis-player'

@Component({
    selector: "player-detail",
    template: 
        `
        <div *ngIf="player">
            <h2>Details of {{player.lastName}}</h2>
            <div><label>ID:</label>{{player.id}}</div>
            <div>
            <label>Name:</label>
            <input [(ngModel)]="player.firstName" placeholder="first name" >
            <input [(ngModel)]="player.lastName" placeholder="last name" >
            </div>
            <div><label>Ranking:</label>{{player.currentRanking}}</div>
        </div>
        `
})

export class PlayerDetailComponent {

    @Input() // Must decorate [player] as an input property
    player : TennisPlayer;

}