import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { validationMessage } from 'src/app/constant/message';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { AddEditComponent } from './user/add-edit/add-edit.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './user/user.module';
import { AuthenticationInterceptor } from './interceptor/authentication.interceptor';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogbodyComponent } from './shared/dialog/dialogbody.component';
// import { EditDialogBoxComponent } from './shared/edit-dialog-box/edit-dialog-box.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import {NgxPaginationModule} from 'ngx-pagination';
import { NotAuthorisedComponent } from './shared/not-authorised/not-authorised.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

// import { SpinnerOverlayBackgroundComponent } from './shared/spinner-overlay-background/spinner-overlay-background.component'
@NgModule({ 
  declarations: [
    AppComponent,
    LoginComponent,
    DialogbodyComponent,
    NotAuthorisedComponent,
    NotFoundComponent,

    // EditDialogBoxComponent,
    // SpinnerOverlayBackgroundComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
   UserModule,
   MatProgressSpinnerModule,
   MatDialogModule,
   NgxSpinnerModule,
   RxReactiveFormsModule,
   NgxPaginationModule
],
  providers: [    {provide:HTTP_INTERCEPTORS, useClass:AuthenticationInterceptor, multi:true}],
  bootstrap: [AppComponent],
  entryComponents: [DialogbodyComponent]
})
export class AppModule { }
