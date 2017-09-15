import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { SearchBooksComponent } from './search-books/search-books.component';
import { SearchResultsComponent } from './search-books/search-results.component';
import { SearchBooksService } from './search-books/search-books.service';

import { MdInputModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    SearchBooksComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    ReactiveFormsModule,
    MdInputModule,
    MdButtonModule,
    MdGridListModule,
    MdCardModule,
    MdToolbarModule,
    MdSidenavModule
  ],
  providers: [
    SearchBooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
