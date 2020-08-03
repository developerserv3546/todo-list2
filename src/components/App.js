import React, {useState} from 'react';
import TodoList from "./TodoList";
import {changeTodoStatus, initialState, editTodo, deleteTodo, addTodo} from "../utils/todo-util";
import TodoCreateForm from "./TodoCreateForm";

const App = () => {

    const [todos, setTodos] = useState(initialState);

    const onStatusChange = (id) => {
        const newTodos = changeTodoStatus(todos, id);
        setTodos(newTodos);
    }

    const onEditTodo = (id, title) => {
        const newTodos = editTodo(todos, id, title);
        setTodos(newTodos);
    }

    const onDeleteTodo = (id) => {
        const newTodos = deleteTodo(todos, id);
        setTodos(newTodos);
    }

    const onCreateTodo = (title) => {
        const newTodos = addTodo(todos, title);
        setTodos(newTodos);
    }

    return (
        <div className="todo-container">
            <h2 className="text-center mb-4 text-secondary">TODO LIST</h2>
            <TodoList
                todos={todos}
                onStatusChange={onStatusChange}
                onEditTodo={onEditTodo}
                onDeleteTodo={onDeleteTodo}/>
            <TodoCreateForm onCreateTodo={onCreateTodo}/>
        </div>
    );
}

export default App;
