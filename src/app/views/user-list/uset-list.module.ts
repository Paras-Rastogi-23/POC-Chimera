import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UserListComponent } from './user-list.component';
import { UsersRoutingModule } from './user-list.routing';
import { AddUserComponent } from '../add-user/add-user.component';
import { UserUpdateComponent } from '../user-update/user-update.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UsersRoutingModule,
        FormsModule
    ],
    declarations: [
        UserListComponent,
        AddUserComponent,
        UserUpdateComponent
    ],
    providers: [
    ]
})
export class UsersModule { }