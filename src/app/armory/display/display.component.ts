import {Component, Input, OnInit} from '@angular/core';
import {BlizzardService} from '../../services/blizzard.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  realm = 'ysondre';
  characterName = 'eleonara';
  apiCall$: Observable<any>;
  leftSideEquipment$: Observable<any>;
  rightSideEquipment$: Observable<any>;
  middleSideEquipment$: Observable<any>;

  leftSide: string[] = ['HEAD', 'NECK', 'SHOULDER', 'BACK', 'CHEST', 'SHIRT', 'TABARD', 'WRIST'];
  rightSide: string[] = ['HANDS', 'WAIST', 'LEGS', 'FEET', 'FINGER_1', 'FINGER_2', 'TRINKET_1', 'TRINKET_2'];
  middleSide: string[] = ['MAIN_HAND', 'OFF_HAND'];

  callPipeSlot(tab: string[]): Observable<any>{
    return this.apiCall$.pipe(
      map((res) => res.equipped_items
        .filter((item) => tab.findIndex((slot) => item.slot.type === slot) !== -1)
        .sort((a, b) =>
          tab.findIndex((slot) => a.slot.type === slot) > tab.findIndex((slot) => b.slot.type === slot) ? 1 : -1
        )),
    );
  }

  onClick(): void{
    this.apiCall$ = this.blizzardservice.getCharEquipment(this.realm, this.characterName);
    this.leftSideEquipment$ = this.callPipeSlot(this.leftSide);
    this.rightSideEquipment$ = this.callPipeSlot(this.rightSide);
    this.middleSideEquipment$ = this.callPipeSlot(this.middleSide);
  }
  constructor(private blizzardservice: BlizzardService) {
  }
  ngOnInit(): void {}

}
