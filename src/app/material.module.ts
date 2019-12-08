import { NgModule } from '@angular/core';

import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,
  MatMenuModule,
  MatSelectModule
} from '@angular/material';

const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,
  MatMenuModule,
  MatSelectModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
