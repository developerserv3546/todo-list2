import React, {useState} from "react";

const TodoCreateForm = (props) => {

    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onCreateClick = () => {
        props.onCreateTodo(value);
        onClearClick();
    }

    const onClearClick = () => {
        setValue('');
    }

    return (
        <div className="todo-form">
            <div className="form-group">
                <label htmlFor="todo-form">Todo Form</label>
                <input onChange={onChange} className="form-control" id="todo-form" placeholder="Enter your text here..." value={value}/>
            </div>
            <button onClick={onCreateClick} className="btn btn-success my-2 ml-2" disabled={value.trim() === ''}>Create</button>
            <button onClick={onClearClick} className="btn btn-secondary my-2 ml-2">Clear</button>
        </div>
    );
}

export default TodoCreateForm;