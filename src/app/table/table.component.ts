import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { ICustomer } from '../customers/customer'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  dataSourceArray: ICustomer[] = [];
  columns = [{ name: 'First Name', field: 'first_name' }, { name: 'Last Name', field: 'last_name' }, { name: 'Company Name', field: 'company_name' },];
  displayedColumns = this.columns.map(column => column.field)
  @Input()
  set tableData(data: ICustomer[]) {
    this.dataSourceArray = data;
    console.log(data)
  }
  @ViewChild(MatTable) table: MatTable<ICustomer>;

  constructor() {
    console.log('issuee')
    console.log()
    //this.dataSourceArray.push({first_name: 'bill', last_name: 'hhh', id: 1, companyid: 2, company_name: 'boook'})
  }

  ngOnInit() {
    console.log('check')
  }

}
