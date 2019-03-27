import { Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';

export const appRoutes: Routes = [
{path:"",component:LoginComponent},
{path:"login",component:LoginComponent},
{path:"home",component:HomeComponent}
];

