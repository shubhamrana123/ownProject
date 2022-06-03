import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule} from '@angular/material/table'
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import { AddEditComponent } from './add-edit/add-edit.component';
@NgModule({
  declarations: [
    UserComponent,AddEditComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgxPaginationModule,
    MatPaginatorModule ,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
  ]
})
export class UserModule { }
