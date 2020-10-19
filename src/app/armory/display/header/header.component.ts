import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() CharName: string;
  @Input() CharRealm: string;
  @Input() CharPicture: string;

  constructor() { }

  ngOnInit(): void {
  }

}
