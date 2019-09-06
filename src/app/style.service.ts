import { Injectable } from '@angular/core';
import {FactionEntity} from './entity/FactionEntity';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  constructor() { }

  public getImagePath(faction: FactionEntity): string {
    return `assets/img/faction/${faction.name}.png`;
  }
}
