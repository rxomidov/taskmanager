import React, {useContext} from 'react';
import {FaTrashAlt,FaPenAlt} from "react-icons/all";
import {TaskListContext} from "../TaskListContext";

const Task = ({task}) => {
    const {removeTask, findItem} = useContext(TaskListContext);
    return (
        <li className="list-item">
            <div>{task.title}</div>
            <div>
                <button className="btn btn-remove"
                        onClick={() => removeTask(task.id)}
                >
                    <FaTrashAlt/>
                </button>
                <button className="btn btn-add"
                onClick={() => findItem(task.id)}
                >
                    <FaPenAlt/>
                </button>
            </div>
        </li>
    );
};

export default Task;