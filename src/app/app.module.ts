import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // needed for primeng

import { AppComponent } from './app.component';

// import fortawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// imports primeng
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ButtonModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
