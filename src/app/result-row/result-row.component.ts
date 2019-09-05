import {Component, Input, OnInit} from '@angular/core';
import {PlayerEntity} from '../entity/PlayerEntity';
import {PlayerResultEntity} from '../entity/PlayerResultEntity';

@Component({
  selector: 'app-result-row',
  templateUrl: './result-row.component.html',
  styleUrls: ['./result-row.component.css']
})
export class ResultRowComponent implements OnInit {
  @Input() public playerResult = new PlayerResultEntity();
  @Input() public s: string;

  constructor() { }

  ngOnInit() {
  }

}
