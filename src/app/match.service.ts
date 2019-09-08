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
  serverUrl = 'http://localhost:8091/';
  lastPlayerResultUrl = this.serverUrl+'last_info/';
  resultsUrl = this.serverUrl + 'results/';
  playersUrl = this.serverUrl+'players/';
  playerUrl = this.serverUrl+'player/';
  matchUrl = this.serverUrl+'match/';
  matchesUrl = this.serverUrl+'matches/';
  factionsUrl = this.serverUrl+'factions';
  distributeUrl = this.serverUrl+'distribute';
  startUrl = this.serverUrl+'/match/';
  constructor(private http: HttpClient) {
    // TODO
  }
  public results(id) : Observable<object>{
    return this.http.get(this.resultsUrl+id);
  }
  public players() : Observable<object>{
    return this.http.get(this.playersUrl);
  }
  public player(id) : Observable<object>{
    return this.http.get(this.playerUrl+id);
  }
  public lastPlayerResult(id): Observable<object> {
    return this.http.get(this.lastPlayerResultUrl+id);
  }
  public match(id) : Observable<object>{
    return this.http.get(this.matchUrl+id);
  }
  public matches() : Observable<object>{
    return this.http.get(this.matchesUrl);
  }
  public factions() : Observable<object>{
    return this.http.get(this.factionsUrl);
  }

  public distribute(data:any) : Observable<object>{
    return this.http.post(this.distributeUrl, data);
  }
  public start(isEnd:boolean, data:any) : Observable<object>{
    return this.http.post(this.startUrl+isEnd, data);
  }
}
