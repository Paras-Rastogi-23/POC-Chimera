import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChangeStyleDirective } from './directives/change-style.directive';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './views/register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ChangeStyleDirective,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar:true,
    }),
    ReactiveFormsModule
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS, useClass:LoggingInterceptor, multi:true},
  ],
  bootstrap: [AppComponent],
  exports: [FormsModule]
})
export class AppModule { }
