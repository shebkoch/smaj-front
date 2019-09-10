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
import {dateNames, idByLogin} from '../utils';
import {ActivatedRoute} from '@angular/router';
import {log} from "util";


@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  private player: PlayerEntity;
  private lastResult: PlayerResultEntity = null;
  constructor(private activatedRoute: ActivatedRoute,
              private matchService: MatchService,
              private styleService : StyleService) {
    // this.sss = 'sasasa';
    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id'];
        let login = params['login'];
        if(login != null){
          localStorage.setItem('login', login);
          id = idByLogin(login);
        }

        if (id != null) {
          matchService.lastPlayerResult(id).subscribe((
            data: PlayerResultEntity) => {
              this.lastResult = data;
            }
          );
          matchService.player(id).subscribe((
            data: PlayerEntity) => {
              this.player = data;
            }
          );
        }
      }
    )

    // this.player = new PlayerEntity();
    // this.player.name = 'Саня';
    // this.player.mmr = 1890;
    // this.player.matchCount = 8;
    // this.player.winCount = 2;
  }

  ngOnInit() {

  }
  public getAvatar(){
    return this.styleService.getAvatar(this.player);
  }
  get winPercent(): number {
    if (this.player.matchCount == 0) { return 0; }
    return this.player.winCount / this.player.matchCount * 100;
  }
}
