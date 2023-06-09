import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UsersContext';

const Register = () => {
    const {createUser,signInWithGoogle}=useContext(AuthContext)

    const handleSubmit =(event)=>{
        event.preventDefault()
        const form =event.target;
        const name=form.name.value;
        const email =form.email.value;
        const password =form.password.value;
        console.log(email,password,name)

        createUser(email,password)
        .then(result=>{
            const user= result.user
            console.log(user)
        })
        .catch(error=>console.error(error))
      }
        //sign in with google 
      const handleGoogleBtn=()=>{
        signInWithGoogle()
        .then(result=>{
            const user= result.user
            console.log(user)
        })
        .catch(error=>console.error(error))
      }
      

      
    return (
        <div>
             <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-5">Please Register now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to= '/login' className="label-text-alt link link-hover">Al ready have an account?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                
                                <button className="btn btn-outline btn-success" onClick={handleGoogleBtn}>Google</button>

                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;