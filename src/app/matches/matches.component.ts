import { Component, OnInit } from '@angular/core';
import {MatchService} from "../match.service";

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches: any[];

  constructor(private matchService: MatchService) { }

  ngOnInit() {
  }

}
