import React, {createContext, useState, useEffect} from 'react';
import uuid from 'uuid/dist/v4';

export const TaskListContext = createContext();

const TaskListContextProvider = ({children}) => {
    const initialState = JSON.parse(localStorage
        .getItem("tasks")) || [];

    const [tasks, setTasks] = useState(initialState);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [editItem, setEditItem] = useState(null);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);

    const addTask = (title) => {
        setTasks([...tasks,
            {id: uuid(), title: title, completed: false}
        ])
    };

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const completeTask = (id) => {
        const item = tasks.find(task => task.id === id);
        setCompletedTasks(...completedTasks, item);
    };

    const clearTasks = () => {
        setTasks([])
    };

    const findItem = (id) => {
        const item = tasks.find(task => task.id === id);
        setEditItem(item);
    };

    const editTask = (title, id) => {
        const newTasks = tasks.map(task => (task.id
        === id ? {id, title} : task));
        setTasks(newTasks);
        setEditItem(null);
    };

    return (
        <TaskListContext.Provider value={{
            tasks, addTask, removeTask, clearTasks, findItem, editTask, editItem,
            completeTask, completedTasks
        }}>
            {children}
        </TaskListContext.Provider>
    );
}

export default TaskListContextProvider;