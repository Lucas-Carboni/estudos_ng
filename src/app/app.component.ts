import { Component } from '@angular/core';
import { TodoItem } from './todoItems';
import { TodoList } from './todoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo';
  private list = new TodoList("Bob", [new TodoItem("Sair para caminhar",true), new TodoItem("Regar as flores"), new TodoItem("Comprar pão"), new TodoItem("Ler um livro")]) // TodoList(user: string, todoiItems?: TodoItem[]): TodoList

  get userName():string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.items
      .filter(item => !item.complete). length;
  }

  get items(): readonly TodoItem[]{
    return this.list.items.filter(item => this.showComplete || !item.complete);
  }

  addItem(newItem: string) {
    if(newItem !=""){
      this.list.addItem(newItem)
    }
  }

  showComplete:boolean = false;
}