import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const CreateNewTask = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext)
    // console.log(user);
    const onSubmit = async (data) => {
        console.log(data);
        const taskItem = {
            title: data.title,
            description: data.description,
            deadline: data.deadline,
            time: data.time,
            priority: data.priority,
            email: user?.email

        }
        const taskRes = await axiosPublic?.post('/task', taskItem);
        console.log(taskRes.data)
        if (taskRes.data.insertedId) {
            // show success popup
            reset();
            alert('added')
        }
        else {
            // Handle the case where insertedId is not present in the response
            console.error('Error: Unable to retrieve insertedId from the response.');
        }
    }




    return (
        <div className="mt-10">

            <h1 className="text-center text-4xl font-bold">Add Your Job</h1>
            <div className="max-w-5xl mx-auto shadow-md p-10 border-[6px] mt-10">

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="grid md:grid-cols-2 md:gap-6">

                        <div className="relative z-0 w-full mb-6 group">
                            <input  {...register('title', { required: true })} type="text" name="title" id="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transHtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Task Title</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">

                            <label htmlFor="priority" className="sr-only">Underline select</label>
                            <select  {...register('priority', { required: true })} id="priority" name="priority" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">

                                <option >Low</option>
                                <option >Moderate</option>
                                <option >High</option>
                            </select>
                        </div>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input  {...register('description', { required: true })} type="text" name="description" id="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transHtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input  {...register('deadline', { required: true })} type="date" name="deadline" id="deadline" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                            <label htmlFor="deadline" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transHtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input  {...register('time', { required: true })} type="time" name="time" id="time" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                            <label htmlFor="time" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transHtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                        </div>

                    </div>

                    <div className="">
                        <input
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[400px] sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            value="Submit"
                        />
                    </div>


                </form>
            </div>

        </div>
    );
};

export default CreateNewTask;