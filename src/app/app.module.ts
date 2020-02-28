import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent} from './components/shared/navbar/navbar.component';
import { LocationComponent } from './components/location/location.component';
import { CharacterComponent } from './components/character/character.component';
import { HomeComponent } from './components/home/home.component';
import { ListCharacterComponent } from './components/list-character/list-character.component';
import { ListLocationComponent } from './components/list-location/list-location.component';
import { ListEpisodeComponent } from './components/list-episode/list-episode.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { NotResultsComponent } from './components/shared/not-results/not-results.component';

////Services
import { AuthService } from './services/auth/auth.service';
import {LocationService} from './services/location/location.service';
import {CharacterService} from './services/character/character.service';
import { EpisodeService } from './services/episode/episode.service';
import { InfoComponent } from './components/info/info.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LocationComponent,
    CharacterComponent,
    HomeComponent,
    ListCharacterComponent,
    ListLocationComponent,
    LoadingComponent,
    NotResultsComponent,
    ListEpisodeComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    InfoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    CharacterService,
    LocationService,
    EpisodeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
