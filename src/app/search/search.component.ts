import { Component, OnInit, Input } from '@angular/core';
import { CommunicationSubjectService } from '../communication/communication.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchValue: string = '';
  typingTimer: any;
  delayMilliseconds: number = 500;
  @Input() label: string;
  constructor(private communicationService: CommunicationSubjectService) { }

  ngOnInit() {

  }



  // Add delay to give user chance to type and reduce redundant calls
  searchData(searchText: string) {
    if (searchText == null) return;
    clearTimeout(this.typingTimer)
    this.typingTimer = setTimeout(() => {

      this.communicationService.setData({ type: 'Search', value: searchText.trim() })

    }, this.delayMilliseconds)
  }


}
