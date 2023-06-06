import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { MainComponent } from './Layout/main/main.component';
import { MenuComponent } from './Layout/menu/menu.component';
import { AddSongComponent } from './pages/add-song/add-song.component';
import { ImageComponent } from './pages/image/image.component';
import { MyFormComponent } from './pages/my-form/my-form.component';
import { TargilComponent } from './pages/targil/targil.component';
import { GreenDirective } from './dir/green.directive';
import { UserResultDirective } from './dir/user-result.directive';
import { WhiteDirective } from './dir/white.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MenuComponent,
    AddSongComponent,
    ImageComponent,
    MyFormComponent,
    TargilComponent,
    GreenDirective,
    UserResultDirective,
    WhiteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
