import React, {useState} from "react";
import TodoEditForm from "./TodoEditForm";

const TodoItem = (props) => {

    const [isEditMode, setEditMode] = useState(false);
    const {onStatusChange, onEditTodo, onDeleteTodo} = props;
    const {id, title, isDone} = props.todo;

    const onEditClick = () => {
        setEditMode(true);
    }

    const onEditCancel = () => {
        setEditMode(false);
    }

    const onDeleteClick = () => {
        onDeleteTodo(id);
    }

    const todoItem = () => {
        return (
            <div>
                <button className="btn btn-outline-success btn-checkbox mr-3"
                        onClick={() => onStatusChange(id)}>{isDone ? <i className="fa fa-check"/> : null}</button>
                <span className={isDone ? 'text-secondary line': ''}>{title}</span>
                <button onClick={onDeleteClick} className="btn btn-light btn-icon float-right text-secondary"><i
                    className="fa fa-trash"/>
                </button>
                <button onClick={onEditClick} className="btn btn-light btn-icon float-right mr-3 text-secondary"><i
                    className="fa fa-pen"/></button>
            </div>
        );
    };

    const todoForm = () => <TodoEditForm
        id={id}
        title={title}
        onEditCancel={onEditCancel}
        onEditTodo={onEditTodo}/>

    return (
        <li className="list-group-item">
            {isEditMode ? todoForm() : todoItem()}
        </li>
    );
}

export default TodoItem;