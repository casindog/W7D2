import RECEIVE_TODOS from '../actions/todo_actions';
import RECEIVE_TODO from '../actions/todo_actions';

import receiveTodos from '../actions/todo_actions';
import receiveTodo from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = function(state = initialState, action) {
  let nextState = Object.assign({}, state);
  debugger
  switch(action.type) {
    case RECEIVE_TODOS:
      //I think this works idk bro???
      let result = {}
      receiveTodos.each((todo, idx) => {
        result[idx] = todo
          // todo.id = idx;
        // todo.title = todo[title];
        // todo.body = todo[body];
        // todo.done = false;
      })

      nextState.todos =  result;
      return nextState;
    case RECEIVE_TODO:
      nextState.todo = receiveTodo[todo];
      return nextState;
    default:
      return state;
  }
}

export default todosReducer;