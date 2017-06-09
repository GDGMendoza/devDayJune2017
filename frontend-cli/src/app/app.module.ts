import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MiniPostComponent } from './home/mini-post/mini-post.component';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import {UserService} from './shared/user/user.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MiniPostComponent,
    PostComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
      UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
