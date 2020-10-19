import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import { DisplayComponent } from './armory/display/display.component';
import { ItemComponent } from './armory/display/item/item.component';
import {FormsModule} from '@angular/forms';
import { ArmoryComponent } from './armory/armory.component';
import { HeaderComponent } from './armory/display/header/header.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

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
        FormsModule,
        MatFormFieldModule,
        MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
