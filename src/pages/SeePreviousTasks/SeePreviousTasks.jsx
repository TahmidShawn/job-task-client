/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// ... (previous code)

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
                console.log('dragging', index);
                drag(drop(node));
            }}
            className="bg-white w-5/6 mx-auto p-4 mb-2"
            key={task._id}
        >
            <h1>Name : {task.title}</h1>
            <h1>Description : {task.description}</h1>
            <h1>Deadline : {task.deadline}</h1>
            <h1>Time : {task.time}</h1>
        </div>
    );
};

const SeePreviousTasks = () => {
    const initialTasks = useLoaderData();
    const [tasks, setTasks] = useState(initialTasks);

    const moveTask = (fromIndex, toIndex) => {
        const updatedTasks = [...tasks];
        const [movedTask] = updatedTasks.splice(fromIndex, 1);
        movedTask.status = 'ONGOING';
        updatedTasks.splice(toIndex, 0, movedTask);
        console.log('tasks after move', updatedTasks);
        setTasks(updatedTasks);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="flex gap-5 justify-between">
                <div className="bg-[#C8EBCE] w-full">
                    <h1 className="text-center text-2xl my-3">TO-DO</h1>
                    <div className="">
                        {tasks
                            .filter((task) => task.status !== 'ONGOING')
                            .map((task, index) => (
                                <Task key={task._id} task={task} index={index} moveTask={(from, to) => moveTask(from, to)} />
                            ))}
                    </div>
                </div>
                <div className="bg-[#E7F59E] w-full">
                    <h1 className="text-center text-2xl my-3">ONGOING</h1>
                    <div className="">
                        {tasks
                            .filter((task) => task.status === 'ONGOING')
                            .map((task, index) => (
                                <Task key={task._id} task={task} index={index} moveTask={(from, to) => moveTask(from, to)} />
                            ))}
                    </div>
                </div>
                <div className="bg-[#d5bdaf] w-full">
                    <h1 className="text-center text-2xl my-3">COMPLETED</h1>
                </div>
            </div>
        </DndProvider>
    );
};

export default SeePreviousTasks;
