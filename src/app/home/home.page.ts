import { Component } from '@angular/core';
import * as moment from 'moment';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public afDB: AngularFireDatabase) {
    this.currentDate = moment().format("Do MM YYYY");
  }

  currentDate: string;
  myTask = '';
  addTask: boolean;

  addTaskToFirebase() {
    console.log("clicked");
    this.afDB.list("/Tasks").push({
      text: this.myTask,
      date: new Date().toISOString(),
      checked: false
    })
    this.showForm();
  }

  showForm() {
    this.addTask = !this.addTask;
    this.myTask = '';
  }



}
