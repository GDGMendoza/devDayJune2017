import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UserService } from './shared/user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: ""
      }
    ),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
