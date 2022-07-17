import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatIconRegistry, MatIcon } from "@angular/material/icon";
import {DomSanitizer} from '@angular/platform-browser';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
profileForm: FormGroup
@Output()  userProfile: EventEmitter<string> = new EventEmitter<string>(); 

  constructor(sanitizer: DomSanitizer, private matIconRegistry: MatIconRegistry) {
    this.matIconRegistry.addSvgIcon(
      `covid-19`,
      sanitizer.bypassSecurityTrustResourceUrl(`../assets/images/5859233 - biology cell coronavirus covid life microorganism virus.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `male-user`,
      sanitizer.bypassSecurityTrustResourceUrl(`../assets/images/5879324 - avatar coronavirus covid19 man mask person wearing.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `female-user`,
      sanitizer.bypassSecurityTrustResourceUrl(`../assets/images/5879325 - avatar coronavirus covid19 mask user wearing woman.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `missing-user`,
      sanitizer.bypassSecurityTrustResourceUrl(`../assets/images/user-svgrepo-com (1).svg`)
    );
  }

  ngOnInit() {
    this.createProfileForm();
  }

  createProfileForm() {
    this.profileForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl(''),
      email: new FormControl(''),
      gender: new FormControl('None')
    })
  }
  

  createAccount() {
    console.log('account created', this.profileForm);
  }

  openMenu(){
    this.userProfile.emit();
  }

}
