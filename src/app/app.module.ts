import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players.component'
import { PlayerDetailComponent } from './player-detail.component'
import { DashboardComponent } from './dashboard.component'

import { PlayerService } from './player.service'

@NgModule({
  declarations: [
    AppComponent,
    PlayerDetailComponent,
    PlayersComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'players',
        component: PlayersComponent
      },
      {
        path: 'playerdetail/:id',
        component: PlayerDetailComponent
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
      
    ])
  ],
  providers: [ PlayerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
