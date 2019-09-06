import {AfterViewInit, Component, HostBinding, Input, OnInit, Output, ViewChild} from '@angular/core';
import {PlayerEntity} from '../entity/PlayerEntity';
import {PlayerResultEntity} from '../entity/PlayerResultEntity';
import {MatchEntity} from '../entity/MatchEntity';
import {FactionEntity} from '../entity/FactionEntity';
import {MatchService} from '../match.service';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {StyleService} from '../style.service';


@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  private player: PlayerEntity;
  private lastResult: PlayerResultEntity = null;

  constructor(private matchService: MatchService, private styleService : StyleService) {
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
  public scoreWidth() {
    if (this.lastResult == null) { return 0; }
    return this.lastResult.score / this.lastResult.matchEntity.winnerScore * 100;
  }
  public maxScoreWidth() {
    return 100 - this.scoreWidth();
  }
  public imagePath(faction: FactionEntity) {
    if (faction == null) { return null; }
    return this.styleService.getImagePath(faction);
  }
  get winPercent(): number {
    if (this.player.matchCount == 0) { return 0; }
    return this.player.winCount / this.player.matchCount * 100;
  }
  ngOnInit() {

  }

}
