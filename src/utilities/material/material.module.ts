import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  imports: [MatMenuModule, MatToolbarModule, MatTableModule, MatIconModule, MatButtonModule],
  exports: [MatMenuModule, MatToolbarModule, MatTableModule, MatIconModule, MatButtonModule],
  bootstrap: []
})
export class MaterialModule { }
