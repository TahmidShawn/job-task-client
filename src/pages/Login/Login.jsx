import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../providers/AuthProvider";




const Login = () => {

    const { googleLogin, signIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    // login via email password 
    const handleLogIn = event => {
        event.preventDefault()
        const form = event.target
        // get register info 
        const email = form.email.value
        const password = form.password.value

        const newUser = { email, password }
        console.log(newUser);
        // logIn user 
        console.log(newUser);
        // create user 
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Successfully Logged In!');
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                if (err.message === 'IncorrectEmail') {
                    toast.error('Email does not match')

                } else if (err.message === 'IncorrectPassword') {
                    toast.error('Password does not match')

                } else {
                    toast.error('Email and Password does not match')
                }
            })

    }

    // login via google 
    const handleGoogleLogin = () => {

        googleLogin()
            .then(() => {
                toast.success('Google login successfully done')
                navigate(location?.state ? location.state : '/')
            })
    }

    return (
        <div className="bg-[#F5F7FA] py-8">

            <h2 className='text-4xl font-bold text-center'>Login</h2>
            <div className="card flex-shrink-0 w-full mx-auto max-w-2xl shadow-2xl bg-base-100 mt-10">
                <form onSubmit={handleLogIn} className="card-body">
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
                        <label className="label mt-4">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <h2 className="my-3 text-center">Do not have an account?  <span><Link className="text-blue-800 font-bold ml-1" to='/register'>Register</Link></span> </h2>

                    <div className="flex items-center justify-center">
                        <Link className="">
                            <button onClick={handleGoogleLogin} className="flex btn bg-gray-300 justify-center items-center gap-2 font-bold text-md"> <FcGoogle className="text-2xl" />Continue with Google </button>
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Login;