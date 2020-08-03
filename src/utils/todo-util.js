import {v4 as uuid} from 'uuid';

export const initialState = [
    {id: uuid(), title: "First Todo", isDone: true},
    {id: uuid(), title: "Second Todo", isDone: true},
    {id: uuid(), title: "Third Todo", isDone: false}
];

export const addTodo = (todos, title) => {
    return [...todos, {id: uuid(), title, isDone: false}];
}

export const deleteTodo = (todos, id) => {
    return todos.filter(el => el.id !== id);
}

export const changeTodoStatus = (todos, id) => {
    return todos.map(el => {
        if (el.id === id) {
            el.isDone = !el.isDone;
        }
        return el;
    });
}

export const editTodo = (todos, id, title) => {
    return todos.map(el => {
        if (el.id === id) {
            el.title = title;
        }
        return el;
    });
}
