import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatIconRegistry, MatIcon } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(sanitizer: DomSanitizer, private matIconRegistry: MatIconRegistry, private router: Router) {
    this.matIconRegistry.addSvgIcon(
      `new-relic`,
      sanitizer.bypassSecurityTrustResourceUrl(`../assets/images/new_relic_logo_horizontal.svg`)
    );
  }

  ngOnInit() {
  }

  redirectToCustomersPage() {
    this.router.navigate(['/customers'])
  }

  redirectToHomePage() {
    this.router.navigate([''])
  }

}
