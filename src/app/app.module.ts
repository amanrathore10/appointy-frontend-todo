import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoitemComponent } from './todoitem/todoitem.component';
import { TodolistComponent } from './todolist/todolist.component';
import { CompletedPipe } from './completed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoitemComponent,
    TodolistComponent,
    CompletedPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent
      }
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
