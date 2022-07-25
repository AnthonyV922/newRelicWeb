import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common'

//import { utilities } from './utilities/utilities.module'


import { MatSelectModule } from '@angular/material/select';
import { FilterComponent } from './filter.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
@NgModule({
  declarations: [
    FilterComponent,

  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  exports: [FilterComponent],
  providers: [],
  bootstrap: []
})
export class FilterModule { }
