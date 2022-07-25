import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

//import { utilities } from './utilities/utilities.module'

import { HttpClientModule } from '@angular/common/http'

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule, MatTableDataSource, } from '@angular/material/table';

import { FilterCompanyComponent } from './filter-company/filter-company.component';
import { FilterModule } from '../filter/filter.module';
import { CompanyService } from './company.service';

@NgModule({
  declarations: [
    FilterCompanyComponent,

  ],
  imports: [
    FilterModule,
    CommonModule,
  ],
  exports: [FilterCompanyComponent],
  providers: [CompanyService],
  bootstrap: []
})
export class CompanyModule { }
