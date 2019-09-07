import { Injectable } from '@angular/core';
import {FactionEntity} from './entity/FactionEntity';
import {PlayerEntity} from './entity/PlayerEntity';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  constructor() { }

  public getImagePath(faction: FactionEntity): string {
    return `assets/img/faction/${faction.name}.png`;
  }
  public getColor(faction: FactionEntity){
    if(faction == null) return null;
    switch (faction.name) {
      case 'Зомби': return  '#78C165';
      case 'Ниндзя': return  '#506893';
      case 'Пришельцы': return  '#b6f486';
      case 'Дота': return  '#f84935';
      case 'Нумерологи': return  '#fcefba';
      case 'Демоны': return  '#d32f18';
      case 'Роботы': return  '#334d5c';
      case 'Глубоководные': return  '#46ade8';
      case 'Пираты': return  '#fcb827';
      case 'Проказники': return  '#2ffb54';
      case 'Мафия': return  '#a4c0cb';
      case 'Симпсоны': return  '#fed90f';
      case 'Волшебники': return  '#78649f';
      case 'Мемы': return  '#ff6058';
      case 'Игроки': return  '#ffe7d1';
    }
  }
  public getAvatar(player: PlayerEntity) {
    if(player == null) return player;
    return `assets/img/player/${player.name}.jpg`;
  }
}
