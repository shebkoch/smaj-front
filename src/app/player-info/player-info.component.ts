import {AfterViewInit, Component, HostBinding, Input, OnInit, Output, ViewChild} from '@angular/core';
import {PlayerEntity} from '../entity/PlayerEntity';
import {PlayerResultEntity} from '../entity/PlayerResultEntity';
import {MatchEntity} from '../entity/MatchEntity';
import {FactionEntity} from '../entity/FactionEntity';
import {MatchService} from '../match.service';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';


@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  private player: PlayerEntity;
  private _s: string;
  private lastResult: PlayerResultEntity = null;

  constructor(private matchService: MatchService) {
    // this.sss = 'sasasa';
    // this._s = 'test';
    matchService.lastPlayerResult().subscribe((
        data: PlayerResultEntity) => {
        this.lastResult = data;
        this.player = this.lastResult.playerEntity;
      }
    );

    // this.player = new PlayerEntity();
    // this.player.name = 'Саня';
    // this.player.mmr = 1890;
    // this.player.matchCount = 8;
    // this.player.winCount = 2;
  }

  ngOnInit() {

  }

}
