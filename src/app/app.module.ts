import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { HomeComponent } from './pages/home/home.component';
import { WorkComponent } from './pages/work/work.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DinoGameComponent } from './components/dino-game/dino-game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NeatComponent } from './pages/neat/neat.component';
import { CubesComponent } from './pages/neat/cubes/cubes.component';
import { ChromejumpComponent } from './pages/neat/chromejump/chromejump.component';
import { NimbleComponent } from './pages/neat/nimble/nimble.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    HomeComponent,
    WorkComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    DinoGameComponent,
    NeatComponent,
    CubesComponent,
    ChromejumpComponent,
    NimbleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/christianarchuleta.com/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
