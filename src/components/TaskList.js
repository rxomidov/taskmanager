import React, {useContext} from 'react';
import {TaskListContext} from "../TaskListContext";
import Task from "./Task";

const TaskList = () => {
    const {tasks, completedTasks} = useContext(TaskListContext);

    return (
        <div>
            {tasks.length ? (
                <ul className="list">
                    {tasks.map((task) => (
                        <Task key={task.id} task={task}/>
                    ))}
                </ul>
            ) : (
                <h1 className="no-tasks">No Tasks</h1>
            )}
            {/*<div>Completed Tasks</div>*/}
            {/*{completedTasks.map(task => (*/}
            {/*    <div>{task.title}</div>*/}
            {/*))}*/}
        </div>
    );
};

export default TaskList;