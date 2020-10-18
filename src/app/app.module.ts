import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import { DisplayComponent } from './armory/display/display.component';
import { ItemComponent } from './armory/display/item/item.component';
import {FormsModule} from '@angular/forms';
import { ArmoryComponent } from './armory/armory.component';
import { HeaderComponent } from './armory/display/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    ItemComponent,
    ArmoryComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
