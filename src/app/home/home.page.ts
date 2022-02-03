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
    this.getTasks();
  }

  currentDate: string;
  myTask = '';
  addTask: boolean;
  tasks: any[] = [];

  addTaskToFirebase() {
    console.log("clicked");
    this.afDB.list("/Tasks").push({
      text: this.myTask,
      date: new Date().toISOString(),
      checked: false
    })
    this.showForm();
  }

  getTasks() {
    this.afDB.list("/Tasks").snapshotChanges(['child_added', 'child_removed'])
      .subscribe(a => {
        this.tasks = []
        a.forEach(action => {
          this.tasks.push({
            key: action.key,
            text: action.payload.exportVal().text,
            hour: action.payload.exportVal().date.substring(11, 16),
            checked: action.payload.exportVal().checked
          })
        })
      })

    console.log(this.tasks);
  }

  showForm() {
    this.addTask = !this.addTask;
    this.myTask = '';
  }



}
