import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { SearchBooksComponent } from './search-books/search-books.component';
import { SearchBooksService } from './search-books/search-books.service';

import { MdInputModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    SearchBooksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    ReactiveFormsModule,
    MdInputModule
  ],
  providers: [
    SearchBooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
