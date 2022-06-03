import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { NotAuthorisedComponent } from './shared/not-authorised/not-authorised.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { pathValue } from './constant/routes';

const routes: Routes = [
  {path:pathValue.loginRoute,component:LoginComponent},
  {path:'',component:LoginComponent},
{path:pathValue.notAuthorised,component:NotAuthorisedComponent},
{ path: pathValue.userRoute,  loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
{path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
