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
  url = 'https://render-eu.worldofwarcraft.com/character/ysondre/3/93452547-main.jpg';
  CharEquipment$: Observable<any>;
  CharMedia$: Observable<any>;
  leftSideEquipment$: Observable<any>;
  rightSideEquipment$: Observable<any>;
  middleSideEquipment$: Observable<any>;
  CharAppearance$: Observable<any>;

  leftSide: string[] = ['HEAD', 'NECK', 'SHOULDER', 'BACK', 'CHEST', 'SHIRT', 'TABARD', 'WRIST'];
  rightSide: string[] = ['HANDS', 'WAIST', 'LEGS', 'FEET', 'FINGER_1', 'FINGER_2', 'TRINKET_1', 'TRINKET_2'];
  middleSide: string[] = ['MAIN_HAND', 'OFF_HAND'];

  private getOrderedItems(tab: string[]): Observable<any>{
    return this.CharEquipment$.pipe(
      map((res) => res.equipped_items
        .filter((item) => tab.findIndex((slot) => item.slot.type === slot) !== -1)
        .sort((a, b) =>
          tab.findIndex((slot) => a.slot.type === slot) > tab.findIndex((slot) => b.slot.type === slot) ? 1 : -1
        )),
    );
  }

  onClick(): void{
    this.CharAppearance$ = this.blizzardservice.getCharAppearance(this.realm, this.characterName);
    this.CharEquipment$ = this.blizzardservice.getCharEquipment(this.realm, this.characterName);
    this.CharMedia$ = this.blizzardservice.getCharMedia(this.realm, this.characterName);
    this.leftSideEquipment$ = this.getOrderedItems(this.leftSide);
    this.rightSideEquipment$ = this.getOrderedItems(this.rightSide);
    this.middleSideEquipment$ = this.getOrderedItems(this.middleSide);
  }
  constructor(private blizzardservice: BlizzardService) {
  }
  ngOnInit(): void {}

}
