import {Component, Input, OnInit} from '@angular/core';
import {BlizzardService} from '../../../services/blizzard.service';
import {Observable} from 'rxjs';




@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  itemData$: Observable<any>;
  itemName$: Observable<any>;
  @Input() itemId: string;
  @Input() textLeft: boolean;



  constructor(private blizzardService: BlizzardService ) {}


  ngOnInit(): void {
    this.itemData$ = this.blizzardService.getItemAppearance(this.itemId);
    this.itemName$ = this.blizzardService.getItemName(this.itemId);
  }

}
