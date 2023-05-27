import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UsersContext';

const Header = () => {
    const {user,logOut}=useContext(AuthContext)
    console.log(user)
    const handleSignOut=()=>{
        
        logOut()
        .then(()=>{})
        .catch(error=>console.error(error))
    }
    return (

        <div className="navbar bg-primary text-primary-content">
            <Link to='/' className="btn btn-ghost normal-case text-2xl">Private Auth</Link>

            <Link to='/' className=' p-8 font-semibold text-xl'>Home</Link>
            <Link to='/login' className='p-8 font-semibold text-xl '>Login</Link>
            <Link to='/register' className='p-8 font-semibold text-xl'>Register</Link>
            <Link to='/orders' className='p-8 font-semibold text-xl'>Orders</Link>
            {user?.email ? 
            <>
            <span>Welcome,{user.email}</span>
            <button className="btn" onClick={handleSignOut}>Log Out</button>
            </>
            :
            <button className='btn' ><Link to ='/login'>Login</Link></button>}

        </div>


    );
};

export default Header;