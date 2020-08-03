import React, {useState} from "react";

const TodoEditForm = (props) => {

    const {id, title, onEditCancel, onEditTodo} = props;
    const [value, setValue] = useState(title);

    const onValueChange = (e) => {
        setValue(e.target.value);
    }

    const onSaveClick = () => {
        onEditTodo(id, value);
        onEditCancel();
    }

    return (
        <div className="todo-form">
            <form>
                <textarea className="form-control" onChange={onValueChange} value={value}/>
                <button onClick={onSaveClick} type="button" className="btn btn-success btn-sm my-2 ml-2"
                        disabled={value.trim() === ''}>Save
                </button>
                <button onClick={onEditCancel} type="button" className="btn btn-secondary btn-sm my-2 ml-2">Cancel
                </button>
            </form>
        </div>
    );
};

export default TodoEditForm;