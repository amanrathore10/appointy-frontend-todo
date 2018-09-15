import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo app';
  activeListId = '';
  newListName = '';
  activeListIndex = 0;
  newTodoItem = '';
  todoLists = [
    {
      id: 'list 1',
      listName: 'Games',
      todos: [
        {
          todoid: '1',
          todoName: 'todo 1',
          todostatus: 'complete'
        },
        {
          todoid: '2',
          todoName: 'Todo 2',
          todostatus: 'incomplete'
        }
      ]
    },
    {
      id: 'list 2',
      listName: 'Shopping List',
      status: 'incomplete',
      todos: [
        {
          todoid: '1',
          todoName: 'Grocery',
          todostatus: 'complete'
        },
        {
          todoid: '2',
          todoName: 'Milk',
          todostatus: 'incomplete'
        }
      ]
    },
    {
      id: 'list 3',
      listName: 'Work',
      status: 'complete',
      todos: [
    ]
    }
  ];
  showOptions = false;
  activeListName = this.todoLists[this.activeListIndex].listName;
  getActiveList(index: number) {
    this.activeListName = this.todoLists[index].listName;
    this.activeListId = this.todoLists[index].id;
    this.activeListIndex = index;
    console.log(this.activeListIndex);
  }
  addTodoList(todolistname: string) {
    if (this.newListName.length > 0) {
    const todoListItem = {
      id: '1234',
      listName: todolistname,
      todos: []
    };
    this.todoLists.push(todoListItem);
    this.newListName = '';
    } else {
      console.log('No list name added');
    }
  }
  addTodoItem(todoname: string) {
    const todoItem = {
      todoid: '2356',
      todoName: todoname,
      todostatus: 'incomplete'
    };
    for (let i = 0 ; i < this.todoLists.length; i++) {
      if (this.todoLists[i].id === this.activeListId) {
        this.todoLists[i].todos.push(todoItem);
      }
    }
  }
}
