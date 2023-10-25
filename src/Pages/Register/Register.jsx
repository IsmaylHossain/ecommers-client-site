/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const Register = () => {



    
    const {createUser} = useContext(AuthContext)
    const [regError,setRegError] = useState('')
    const [segSuccess,setRegSuccess] = useState('')

    const handleRegister = e =>{
        e.preventDefault();
        // console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const email = form.get('email')
        const imgUrl = form.get('image')
        const password = form.get('password');
        const upperCase = /[A-Z]/;
        if(password <6 || !upperCase.test(password) ||!password.match(/[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]/)){
            swal("Error", "Minimum 6 character, 1 uppercase and one special character needed", "error");
            return;
        }
        setRegError('')
        setRegSuccess('')
        createUser(email,password)
        .then(result =>{
            console.log(result.user)
            swal("Good job!", "Registration successful", "success");

            updateProfile(result.user,{
                displayName:name,
                photoURL:imgUrl
            })
            .then(()=> console.log("updated"))
            .catch()

        })
        .catch(error =>{
            console.log(error);
            swal("Error", "This email is already used", "error")

        })

    }
    return (
        <div>
            
            <div className=" min-h-screen bg-base-100">
                <div className="pt-16 flex flex-col justify-center mb-5 items-center">
                <Link to='/'>
                <img src="https://i.ibb.co/17HxRTd/logo.png" alt="" />
                </Link>
                
                </div>
           
            <form onSubmit={handleRegister} className="card-body  bg-amber-700 md:w-3/4 lg:w-1/2 mx-auto rounded-xl">
                <div>
                <h2 className="text-3xl text-center text-white font-bold ">Please Register</h2>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-white">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered bg-white" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-white">Your Name</span>
                    </label>
                    <input type="text" placeholder="Your Name" name="name" className="input input-bordered bg-white" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-white">Image url</span>
                    </label>
                    <input type="text" placeholder="image_url(optional)" name="image" className="input input-bordered bg-white"  />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-white">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered bg-white" name="password" required />
                 
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-white text-black font-bold hover:bg-inherit hover:text-white hover:border-none">Register</button>
                </div>
            </form>

            <p className="text-center mt-3 text-gray-500">Already have an account,  <Link className="text-blue-600 font-semibold" to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;