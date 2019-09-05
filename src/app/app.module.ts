import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PlayerInfoComponent } from './player-info/player-info.component';
import { TopComponent } from './top/top.component';
import { LastMatchesComponent } from './last-matches/last-matches.component';
import {RouterModule} from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ResultRowComponent } from './result-row/result-row.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlayerInfoComponent,
    TopComponent,
    LastMatchesComponent,
    TopBarComponent,
    ResultRowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: PlayerInfoComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
