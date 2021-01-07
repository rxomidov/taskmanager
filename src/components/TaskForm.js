import React, {useContext, useState, useEffect} from 'react';
import {TaskListContext} from "../TaskListContext";

const TaskForm = () => {
    const {addTask, clearTasks, editTask, editItem} = useContext(TaskListContext);

    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!editItem){
            addTask(title);
            setTitle('');
        } else {
            editTask(title, editItem.id);
        }
    };

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    useEffect(()=>{
        if (editItem){
            setTitle(editItem.title)
            console.log(editItem)
        } else {
            setTitle("")
        }
    }, [editItem]);

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input type="text"
                   onChange={handleChange}
                   value={title}
                   placeholder="Write new task..."
                   required
            />
            <div>
                <button type="submit" className="btn task-button">
                    {!editItem ? 'Add Task' : 'Edit Task'}
                </button>
                <button onClick={clearTasks}
                        className="btn task-button">Clear</button>
            </div>
        </form>
    );
};

export default TaskForm;