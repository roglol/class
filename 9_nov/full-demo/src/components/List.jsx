import React from 'react';

function List( { todos, onToggle, onRemove } ){
    return (
<<<<<<< HEAD
        <div className="list-custom list-group">
            
=======
    <div className="list-custom list-group">
        {
        todos.map( todo => (
        <div className="todo list-group-item justify-content-between" key={todo.id}>
         <label>
    <input type='checkbox' checked={todo.done} onChange={ () => onToggle(todo.id)}/>
    {todo.name}
    </label>
    <button className="btn btn-info btn-sm" onClick={() => onRemove(todo.id)}>Remove</button>
         </div>
    ))
             }
>>>>>>> f18f9440540c43c841420b6fafd3d6d7325120cc
        </div>
    )
}

export default List;