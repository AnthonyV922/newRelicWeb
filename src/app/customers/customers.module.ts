import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common'

import { MaterialModule } from '../../utilities/material/material.module'
import { CustomersComponent } from './customers.component';

import { CustomersService } from './service/customers.service'
import { TableModule } from '../table/table.module'
import { CustomersRoutingModule } from './customers-route.module'
import { CompanyModule } from '../company/company.module';
import { SearchModule } from '../search/search.module'
@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MaterialModule,
    TableModule,
    CompanyModule,
    SearchModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [CustomersService],
  bootstrap: []
})
export class CustomersModule { }
