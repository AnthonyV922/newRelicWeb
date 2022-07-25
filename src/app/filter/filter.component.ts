import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { IFilter } from './filter'
import { CommunicationSubjectService } from '../communication/communication.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  selectedValue: number = 0;
  searchValue: string = '';
  filteredData: IFilter[] = [];
  data: IFilter[] = [];
  @ViewChild('filterDropdown') filterDropdown;
  @Input() label: string;
  @Input()
  set filterData(data: IFilter[]) {
    this.data = data;
    this.selectedValue = 0;
  }
  @Output() filterEvent = new EventEmitter<any>();
  constructor(private communicationService: CommunicationSubjectService) { }

  ngOnInit() {

  }


  selectData(data: IFilter) {
    if (!data) return;
    this.searchValue = null;

    this.communicationService.setData({ type: 'Filter', value: data.name })
  }

  closeDropdown(event) {
    //  this.filterDropdown.close()
  }


}
