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
  lastPlayerResultUrl = 'http://localhost:8091/last_info/';
  resultsUrl = 'http://localhost:8091/results/';
  playersUrl = 'http://localhost:8091/players/';
  playerUrl = 'http://localhost:8091/player/';
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
}
