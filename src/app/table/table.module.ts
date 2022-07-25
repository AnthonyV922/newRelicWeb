import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

//import { utilities } from './utilities/utilities.module'

import { HttpClientModule } from '@angular/common/http'

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule, MatTableDataSource, } from '@angular/material/table';

import { TableComponent } from './table.component';

@NgModule({
  declarations: [
    TableComponent,

  ],
  imports: [

    CommonModule,
    MatTableModule,
    MatIconModule,
  ],
  exports: [TableComponent],
  providers: [],
  bootstrap: []
})
export class TableModule { }
