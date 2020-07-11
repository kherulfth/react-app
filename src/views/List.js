import React from 'react';
import { useDispatch, useSelector } from 'react-redux';



function TodoList(){

  let todoRef;

  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const _handleNewTodo = (e) => {
    let newTodo = todoRef.value;
    dispatch({
      type: 'ADD TODO',
      todo: newTodo
    })

    e.preventDefault();
    todoRef.value = '';
  }

    return (
      <div className="App">
        <header className="App-header">
          <div class="container">
            <h1>Todo List</h1>
              <form onSubmit={_handleNewTodo}>
                <label>New todo <input ref={input => todoRef = input} /></label>
              </form>
              <ul>{todos.map((item, index) => <li key={index}>{item}</li>)}</ul>
          </div>
        </header>
      </div>
    );
}


export default TodoList;