import React, {useContext} from 'react';
import {TaskListContext} from "../TaskListContext";
import Task from "./Task";

const TaskList = () => {
    const {tasks} = useContext(TaskListContext);

    return (
        <div>
            {tasks.length > 0 ? (
                <ul className="list">
                    {tasks.map((task) => (
                        <Task key={task.id} task={task}/>
                    ))}
                </ul>
            ) : (
                <h1 className="no-tasks">No Tasks</h1>
            )}

        </div>
    );
};

export default TaskList;