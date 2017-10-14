import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Location } from '@angular/common'

import 'rxjs/add/operator/switchMap'

import { TennisPlayer } from './tennis-player'
import { PlayerService } from './player.service'

@Component({
    selector: "player-detail",
    templateUrl: "./player-detail.component.html"
})

export class PlayerDetailComponent implements OnInit {

    constructor(
        private playerService: PlayerService,
        private activatedRoute: ActivatedRoute,
        private location: Location
    ) { }

    @Input() // Must decorate [player] as an input property
    player: TennisPlayer;

    ngOnInit(): void {
        // plus sign -> +params.get('id') is a cast from string to number
        this.activatedRoute.paramMap.switchMap((params: ParamMap) => this.playerService.getPlayer(+params.get('id'))).subscribe(player => this.player = player);
    }

    goBack(): void {
        this.location.back();
    }

}