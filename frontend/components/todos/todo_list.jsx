import React, { Component } from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  render() {
    let list = this.props.todos.map((todo) => {
      //debugger;
      return <TodoListItem todo={todo} key={todo.id}/>
    })

    return (
      <div>
        <ul>
        {list}
       </ul>
       <TodoForm />
      </div>
    )
  }
}

export default TodoList;
