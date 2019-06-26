import React, { Component } from 'react';
import TodoList from './todos/todo_list'
import ToDoListContainer from './todos/todo_list_container'

export default class App extends Component {
  render() {
    return (
      <div>
        <ToDoListContainer />
      </div>
    )
  }
}
