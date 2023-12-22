/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Task = ({ task, index, moveTask }) => {
    const [, drag] = useDrag({
        type: 'TASK',
        item: { index },
    });

    const [, drop] = useDrop({
        accept: 'TASK',
        hover: (draggedItem) => {
            if (draggedItem.index !== index) {
                moveTask(draggedItem.index, index);
                draggedItem.index = index;
            }
        },
    });

    return (
        <div
            ref={(node) => {
                drag(drop(node));
            }}
            style={{
                border: '1px solid #ccc',
                padding: '10px',
                marginBottom: '10px',
                backgroundColor: 'white',
            }}
        >
            <h1>Name: {task.title}</h1>
            <h1>Description: {task.description}</h1>
            <h1>Deadline: {task.deadline}</h1>
            <h1>Time: {task.time}</h1>
        </div>
    );
};

const SeePreviousTasks = () => {
    const initialTasks = useLoaderData();
    const [tasks, setTasks] = useState(initialTasks);

    const moveTask = (fromIndex, toIndex) => {
        const updatedTasks = [...tasks];
        const [movedTask] = updatedTasks.splice(fromIndex, 1);
        movedTask.status = toIndex === tasks.length ? 'COMPLETED' : toIndex === tasks.length + 1 ? 'ONGOING' : 'TO-DO';
        updatedTasks.splice(toIndex, 0, movedTask);
        setTasks(updatedTasks);
    };

    // Drop refs for the "COMPLETED" and "ONGOING" sections
    const [, dropCompleted] = useDrop({
        accept: 'TASK',
        hover: (draggedItem) => {
            if (draggedItem.index !== tasks.length) {
                moveTask(draggedItem.index, tasks.length);
                draggedItem.index = tasks.length;
            }
        },
    });

    const [, dropOngoing] = useDrop({
        accept: 'TASK',
        hover: (draggedItem) => {
            const ongoingIndex = tasks.findIndex((task) => task.status === 'ONGOING');
            if (draggedItem.index !== ongoingIndex && ongoingIndex !== -1) {
                moveTask(draggedItem.index, ongoingIndex);
                draggedItem.index = ongoingIndex;
            }
        },
    });

    return (
        <div className="flex gap-5 justify-between">
            <div ref={dropCompleted} className="bg-[#C8EBCE] w-full">
                <h1 className="text-center text-2xl my-3">TO-DO</h1>
                <div>
                    {tasks
                        .filter((task) => task.status !== 'ONGOING' && task.status !== 'COMPLETED')
                        .map((task, index) => (
                            <Task key={task._id} task={task} index={index} moveTask={(from, to) => moveTask(from, to)} />
                        ))}
                </div>
            </div>

            <div ref={dropCompleted} className="bg-[#d5bdaf] w-full">
                <h1 className="text-center text-2xl my-3">COMPLETED</h1>
                <div>
                    {tasks
                        .filter((task) => task.status === 'COMPLETED')
                        .map((task, index) => (
                            <Task key={task._id} task={task} index={index} moveTask={(from, to) => moveTask(from, to)} />
                        ))}
                </div>
            </div>

            <div ref={dropOngoing} className="bg-[#E7F59E] w-full">
                <h1 className="text-center text-2xl my-3">ONGOING</h1>
                <div>
                    {tasks
                        .filter((task) => task.status === 'ONGOING')
                        .map((task, index) => (
                            <Task key={task._id} task={task} index={index} moveTask={(from, to) => moveTask(from, to)} />
                        ))}
                </div>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <SeePreviousTasks />
        </DndProvider>
    );
};

export default App;
