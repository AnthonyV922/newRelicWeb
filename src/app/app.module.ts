import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { utilities } from './utilities/utilities.module'
import { routing } from './app.route'
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu'
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TableComponent } from './table/table.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersService } from './customers/service/customers.service';
import { HomePageComponent } from './home-page/home-page.component'
import { MaterialModule } from 'src/utilities/material/material.module';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { CommunicationSubjectService } from './communication/communication.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomePageComponent
  ],
  imports: [
    routing,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [CommunicationSubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
