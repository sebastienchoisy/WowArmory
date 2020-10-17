import {Component, Input, OnInit} from '@angular/core';
import {BlizzardService} from '../../services/blizzard.service';
import {take} from 'rxjs/operators';
import {DisplayComponent} from '../display.component';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item: any;
  @Input() itemId: string;


  constructor(private blizzardservice: BlizzardService ) {
    this.blizzardservice.getItemAppearance(this.itemId).subscribe((res) => this.item = res.assets[0].value);
  }

  ngOnInit(): void {
    this.blizzardservice.getItemAppearance(this.itemId).subscribe((res) => this.item = res.assets[0].value);
  }

}
