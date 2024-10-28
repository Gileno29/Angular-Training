// todo-list.component.ts

import { Component } from '@angular/core';
import {TodoListItem} from './todo-list-item.component.ts';
import { from } from 'rxjs';
@Component({
  standalone: true,
  selector: "todo-list",
  imports: [TodoListItem],
  template: `
    <ul>
      <todo-list-item></todo-list-item>
    </ul>
  `,
})
export class TodoList {}