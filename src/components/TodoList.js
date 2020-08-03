import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {

    const {todos, onStatusChange, onEditTodo, onDeleteTodo} = props;

    return (
        <ul className="list-group">
            {
                todos.map(todo => <TodoItem key={todo.id} todo={todo} onStatusChange={onStatusChange}
                                            onEditTodo={onEditTodo} onDeleteTodo={onDeleteTodo}/>)
            }
        </ul>
    );
}

export default TodoList;