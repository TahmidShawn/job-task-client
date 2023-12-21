import { useLoaderData } from "react-router-dom";

import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import Task from "./Task";

const SeeAllTasks = () => {

    const allTasks = useLoaderData()
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(allTasks)
    }, [allTasks])


    console.log(tasks);
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/task/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted',
                                'This job has been deleted',
                                'success'
                            )
                            const remaining = tasks?.filter(task => task._id !== _id);
                            setTasks(remaining);
                        }
                    })

            }
        })
    }
    return (
        <div>
            {
                tasks?.map(task => <Task task={task} handleDelete={handleDelete} key={task._id}></Task>)
            }
        </div>
    );
};

export default SeeAllTasks;