import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent } from './user-list/user-list.component';
import {CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  {path: 'users', component: UserListComponent  },
  //{path: '', redirectTo: 'users', pathMatch: 'full'}
  { path: 'adduser', component: CreateUserComponent},
  //{ path: 'updateuser', component: CreateUserComponent},
  //{ path: 'deleteuser', component: CreateUserComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
