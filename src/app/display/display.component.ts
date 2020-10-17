import { Component, OnInit } from '@angular/core';
import {BlizzardService} from '../services/blizzard.service';
import {take} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  appearance: Observable<any> ;
  constructor(blizzardservice: BlizzardService) {
    this.appearance = blizzardservice.getCharAppearance('ysondre', 'eleonara').pipe(take(1));
  }
  ngOnInit(): void {
  }

}
