import { Injectable } from '@angular/core';
import {PlayerResultEntity} from './entity/PlayerResultEntity';
import {PlayerEntity} from './entity/PlayerEntity';
import {MatchEntity} from './entity/MatchEntity';
import {FactionEntity} from './entity/FactionEntity';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  url = 'http://localhost:8080/last_info/1';
  private _lastPlayerResult: PlayerResultEntity;

  constructor(private http: HttpClient) {
    // TODO
  }

  public lastPlayerResult(): Observable<object> {
    return this.http.get(this.url);
    // this._lastPlayerResult = new PlayerResultEntity();
    // this._lastPlayerResult.match = new MatchEntity();
    // this._lastPlayerResult.match.etime = new Date();
    // this._lastPlayerResult.match.etime.setDate(Date.now());
    // this._lastPlayerResult.match.etime.setHours(this._lastPlayerResult.match.etime.getHours() - 2);
    // this._lastPlayerResult.match.ctime = this._lastPlayerResult.match.etime;
    // this._lastPlayerResult.match.ctime.setHours(this._lastPlayerResult.match.ctime.getHours() - 2);
    // this._lastPlayerResult.match.isRating = true;
    // this._lastPlayerResult.mmrChange = -14;
    // this._lastPlayerResult.score = 12;
    // this._lastPlayerResult.maxScore = 16;
    // let faction1 = new FactionEntity();
    // let faction2 = new FactionEntity();
    // faction1.name = 'Демоны';
    // faction2.name = 'Воры';
    // this._lastPlayerResult.faction1 = faction1;
    // this._lastPlayerResult.faction2 = faction2;
    // return this._lastPlayerResult;
  }
}
