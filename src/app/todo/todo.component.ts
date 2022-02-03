import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {

  constructor(private afDB: AngularFireDatabase) { }

  ngOnInit() { }

  @Input() task: any = {};

  changeCheckState(ev: any) {
    this.afDB.object('Tasks/' + ev.key + "/checked").set(ev.checked);
  }

  deleteTask(task: any) {
    this.afDB.list('Tasks/').remove(task.key);
  }

}
