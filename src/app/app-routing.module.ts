import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CharacterComponent} from './components/character/character.component';
import {HomeComponent} from './components/home/home.component';
import {ListCharacterComponent} from './components/list-character/list-character.component';
import {ListLocationComponent} from './components/list-location/list-location.component';
import {ListEpisodeComponent} from './components/list-episode/list-episode.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {InfoComponent} from './components/info/info.component';


const routes: Routes = [

  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      {path: 'info', component: InfoComponent, canActivate: [AuthGuard] },
      {path: 'locations', component: ListLocationComponent, canActivate: [AuthGuard] },
      {path: 'episodes', component: ListEpisodeComponent, canActivate: [AuthGuard] },
      {path: 'characters', component: ListCharacterComponent, canActivate: [AuthGuard] },
      {path: 'character/:id', component: CharacterComponent, canActivate: [AuthGuard] },
      {path: '', pathMatch: 'full', redirectTo: 'info' },
      {path: '**',  pathMatch: 'full', redirectTo: 'info' },
    ]
  },

  {path: '', pathMatch: 'full', redirectTo: 'login' },
  {path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
