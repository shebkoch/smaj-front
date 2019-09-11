import { Component, OnInit } from '@angular/core';
import {MatchService} from '../match.service';
import {PlayerResultEntity} from '../entity/PlayerResultEntity';
import {StyleService} from '../style.service';
import {FactionEntity} from '../entity/FactionEntity';

@Component({
  selector: 'app-factions',
  templateUrl: './factions.component.html',
  styleUrls: ['./factions.component.css']
})
export class FactionsComponent implements OnInit {

  public factions: any[];

  constructor(private matchService : MatchService,
              private styleService: StyleService) {
      matchService.factions().subscribe((
        data: any) => {
          this.factions = data;
        }
      );
  }
  getColor(faction: FactionEntity){
    return this.styleService.getColor(faction);
  }
  ngOnInit() {
  }

}
