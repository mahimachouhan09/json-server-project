import React from 'react'

function PrintTodo ({ todos }) {
  return(
    <ul>
      { todos && todos.todos && todos.todos.map((value, index) => (
          <li key = { index }> 
            UserId : {value.userId}<br/>
            id : {value.id}<br/>
            title : {value.title}
            completed : {value.completed}
          </li>  
        ))
      }
    </ul>
  );
};

export default PrintTodo;