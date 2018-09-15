import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  @ Input () data ;
  todolistdata  ;
  constructor() { }

  ngOnInit() {
    this.todolistdata = this.data;
    console.log(this.todolistdata);
  }
  ngOnChange () {
      this.todolistdata = this.data;
    console.log(this.todolistdata);
    }
  }

