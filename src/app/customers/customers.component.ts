import { Component, OnInit, KeyValueDiffers } from '@angular/core';
import { CustomersService } from './service/customers.service'
import { ICustomer } from './customer';
import { CommunicationSubjectService } from '../communication/communication.service'
import { ICommunication } from '../communication/communication'
import { ICustomerQuery } from './customer-query'
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})

export class CustomersComponent implements OnInit {
  customers = [];
  query: any = {};
  emptyQuery: ICustomerQuery = { filter_by_company_name: null, search: null };
  constructor(private __customerService: CustomersService, private communicationService: CommunicationSubjectService) { }

  ngOnInit() {

    this.communicationService.subject.subscribe((e: ICommunication) => {
      this.determineQuery(e)
    });
    let query = {};
    this.filterCustomersByCompany(query)
  }


  filterCustomersByCompany(query) {

    this.__customerService.getCustomers(query).subscribe(data => this.customers = data);
  }

  determineQuery(result: ICommunication) {
    
    switch (result.type) {
      case 'Filter':
        this.query['filter_by_company_name'] = result.value;
        break;
      case 'Search':
        if (!result.value) delete this.query.search;
        else this.query['search'] = result.value;
        break;
      default:
    }
  
    this.filterCustomersByCompany(this.query);
  }

}
