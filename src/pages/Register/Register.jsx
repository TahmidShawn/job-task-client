import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {
    const navigate = useNavigate()
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const handleRegister = event => {
        event.preventDefault()
        const form = event.target
        // get register info 
        const displayName = form.displayName.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value
        if (password.length < 6) {
            return toast.error("Password must be at least 6 characters")
        }

        else if (!/[A-Z]/.test(password)) {
            return toast.error("Password must have at least one uppercase letter")
        }

        else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\-|/"'`]/.test(password)) {
            return toast.error("Password must contain at least one special character")
        }
        const newUser = { displayName, email, password, photo }
        console.log(newUser);
        // create user 
        createUser(email, password)
            .then(result => {
                console.log(result);
                // navigate(location?.state ? location.state : '/')
                updateUserProfile(displayName, photo)
                    .then(() => {
                        // create user entry in the database
                        const userInfo = {
                            name: displayName,
                            email: email,
                            photoUrl: photo,

                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database')

                                    alert('done')
                                    form.reset()
                                    navigate(location?.state ? location.state : '/')
                                }
                            })
                    })


            })

            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="bg-[#F5F7FA] py-5">

            <h2 className='text-4xl font-bold text-center'>Register</h2>
            <div className="card flex-shrink-0 w-full mx-auto max-w-2xl shadow-2xl bg-base-100 mt-10">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="displayName" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <h2 className="my-3 text-center">Already have an account?  <span><Link className="text-blue-800 font-bold ml-1" to='/login'>Login</Link></span> </h2>
                </form>
            </div>
        </div>
    );
};

export default Register;