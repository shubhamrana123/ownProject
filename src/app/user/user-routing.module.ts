import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from '../guard/authorization.guard';
import { UserRoleGuard } from '../guard/user-role.guard';
import { AddEditComponent } from './add-edit/add-edit.component';
import { UserComponent } from './user.component';
import { pathValue } from '../constant/routes';
const routes: Routes = [
  { path: '', component: UserComponent},
  {path:pathValue.addEditRoute,component:AddEditComponent ,canActivate:[AuthorizationGuard,UserRoleGuard]},
  {path:pathValue.editUser+"/:userId",component:AddEditComponent,canActivate:[AuthorizationGuard,UserRoleGuard]},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
