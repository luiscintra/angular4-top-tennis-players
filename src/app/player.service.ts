import { Injectable } from '@angular/core'
import { TennisPlayer } from './tennis-player'
import { TENNIS_PLAYERS } from './mock-players'

@Injectable()
export class PlayerService {

    getPlayers() : Promise<TennisPlayer[]> {
        return Promise.resolve(TENNIS_PLAYERS);
    }

    getPlayer(id : number) : Promise<TennisPlayer> {
        return this.getPlayers().then( plrs => plrs.find( player => player.id === id));
    }

}