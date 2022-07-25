import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common'

//import { utilities } from './utilities/utilities.module'


import { MatSelectModule } from '@angular/material/select';
import { SearchComponent } from './search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
@NgModule({
  declarations: [
    SearchComponent,

  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  exports: [SearchComponent],
  providers: [],
  bootstrap: []
})
export class SearchModule { }
