import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { TodoComponent } from './todo/todo.component';
import { TodoModule } from './todo/todo.module';
const firebaseConfig = {
  apiKey: "AIzaSyCIpfkclpn5xb0DdDURmyA32V3qT5IS-_E",
  authDomain: "todoionic-bd2e2.firebaseapp.com",
  databaseURL: "https://todoionic-bd2e2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todoionic-bd2e2",
  storageBucket: "todoionic-bd2e2.appspot.com",
  messagingSenderId: "325246154438",
  appId: "1:325246154438:web:9c75436f39c4189f2d09c7",
  measurementId: "G-WFF3N0D1JY"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule, TodoModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
