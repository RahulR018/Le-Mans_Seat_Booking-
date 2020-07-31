import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HistoryComponent } from './history/history.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GrandstandComponent } from './grandstand/grandstand.component';


const routes: Routes =
  [
    { path: '', component: WelcomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'logout', component: LoginComponent },
    {path:'grandstand', component:GrandstandComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
