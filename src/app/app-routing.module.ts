import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddUserComponent } from './views/add-user/add-user.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { UserListComponent } from './views/user-list/user-list.component';
import { UserUpdateComponent } from './views/user-update/user-update.component';


const routes: Routes = [
  { path:''          , redirectTo:'/login', pathMatch:'full' },
  { path:'login'     , component:LoginComponent},
  { path:'home'      , component:HomeComponent , canActivate:[AuthGuard]},
  { path:'addnew'    , component:AddUserComponent, canActivate:[AuthGuard]},
  { path:'users'     , component:UserListComponent, canActivate:[AuthGuard]},
  { path:'update/:id', component:UserUpdateComponent, canActivate:[AuthGuard] },
  { path:'register'  , component:RegisterComponent},
  { path:'**'        , component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {   }
