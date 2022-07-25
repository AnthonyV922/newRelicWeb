import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service'
import { ICompany } from '../company';
@Component({
  selector: 'app-filter-company',
  templateUrl: './filter-company.component.html',
  styleUrls: ['./filter-company.component.scss']
})

export class FilterCompanyComponent implements OnInit {
  companies: ICompany[] = [];
  constructor(private __companyService: CompanyService) { }

  ngOnInit() {
    const query = {}; 
    this.__companyService.getCompanies(query).subscribe(result => { console.log(result); this.companies = result });
  }

}
