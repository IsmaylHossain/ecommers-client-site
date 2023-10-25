/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert2";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const {logIn,googleLogin} = useContext(AuthContext)
    const [logInErr, setLogInErr] = useState('');
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        // console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        setLogInErr('')
        logIn(email,password)
        .then(result =>{
            console.log(result.user)
            navigate(location?.state ? location.state: '/')
        })
        .catch(error =>{
            console.error(error)
            swal("Error", "incorrect email or password", "error")
        })
    }
    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result =>{
            console.log(result.user)
            navigate(location?.state ? location.state: '/')
            
        })
        .catch(error =>{
            console.error(error)
        }) 

    }


    
    return (
        <div className=" min-h-screen bg-base100">
            <div className="pt-16 flex flex-col justify-center mb-5 items-center">
                <Link to='/'>
                <img src="https://i.ibb.co/17HxRTd/logo.png" alt="" />
                </Link>
                
                </div>
         
            <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 md:mx-auto mx-4 bg-amber-700 rounded-xl">
            <div>
                <h2 className="text-3xl text-center text-white font-bold ">Please Login</h2>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-white">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered bg-white" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="font-bold text-white label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered bg-white" name="password" required />
            
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-white text-black font-bold hover:bg-inherit hover:text-white hover:border-none">Login</button>
                </div>
                <div className="form-control text-center">
                    <h2 className="text-white font-bold">Or</h2>
                </div>
                <div className="form-control mt-2">
                    <button onClick={handleGoogleLogin} className="btn bg-white text-blue-700 font-extrabold">LogIn with Google <FcGoogle className="text-2xl"></FcGoogle></button>
                </div>
            </form>
            <p className="text-center pb-10 text-gray-500 mt-3">Don't have an account? <Link className="text-blue-500 font-bold" to='/register'>Register</Link></p>
            </div>
    );
};

export default Login;