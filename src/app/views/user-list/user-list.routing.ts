import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserUpdateComponent } from '../user-update/user-update.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { UserListComponent } from './user-list.component';
const routes: Routes = [
    { path:'',component:UserListComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }