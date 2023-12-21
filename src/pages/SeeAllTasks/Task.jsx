/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Task = ({ task, handleDelete }) => {
    const { _id } = task
    return (
        <div className="bg-slate-300 p-5 m-5">
            <h1>Name : {task.title}</h1>
            <h1>Description : {task.description}</h1>
            <h1>Deadline : {task.deadline}</h1>
            <h1>Time : {task.time}</h1>
            <Link to={`/update/${_id}`}><button className="btn btn-success">Update</button></Link>
            <button onClick={() => handleDelete(_id)} className="btn mt-3">Delete</button>
        </div>
    );
};

export default Task;