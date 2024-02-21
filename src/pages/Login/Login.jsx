import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';
import Navbar from '../../sharedComponent/Navbar';
// import { AuthContext } from './Provider';

const Login = () => {

    const navigate=useNavigate();
    const location=useLocation();
    const from = location.state?.from?.pathname || '/';
    // const {LoginUser,googleLogin}=useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = (event) => {
      event.preventDefault();
      const form=event.target;
      const email=form.email.value;
      const password =form.password.value;
      console.log(email,password);
       LoginUser(email,password)
       .then(result=>{
        const signinUser=result.user;
        console.log(signinUser);
        setEmail('');
        setPassword('');
    
        Swal.fire({
          title: 'Great!',
          text: 'Successfully Login ',
          icon: 'success',
          confirmButtonText: 'Done'
        });
        navigate(from, { replace: true }); 
  
       })
       .catch(error=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Login Failed!',
        })
       })
      
    };
    // const handleGoogleLogin=()=>{
    //   googleLogin()
    //   .then(result=>{
    //     const googlelogged=result.user;
        
    //     /////
    //     const saveUser={name:googlelogged.displayName,email: googlelogged.email}
    //     fetch('https://meet-tech-lab-server.vercel.app/users',{
    //       method:"POST",
    //       headers:{
    //         'content-type':'application/json'
    //       },
    //       body:JSON.stringify(saveUser)
    //     })
    //     .then(res=>res.json())
    //     .then(()=>{
        
    //          // navigate(from, { replace: true });
  
          
    //     })
    //     ////
    //     console.log(googlelogged)
    //     Swal.fire({
    //       position: 'top-end',
    //       icon: 'success',
    //       title: 'Google Login successfully',
    //       showConfirmButton: false,
    //       timer: 1500
    //     })
    //   })
    //    .catch(error=>{
    //     console.log(error)
    //    })
    // }
  
    return (
        <div>
            <Navbar></Navbar>
        <form onSubmit={handleLogin} className="hero min-h-screen bg-base-100">
    <div className="hero-content flex-col lg:flex-row">
      <div className="text-center lg:text-left">
       <img src="https://i.ibb.co/X2fGfzX/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cl.jpg" alt="" />
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100">
        <div className="card-body font-serif">
         <div className='mb-2'>

  
         <h3 className='text-2xl mb-2 font-bold font-serif'>Login Now </h3>
          <p className='text-xl'>Enter your details to Login.</p>
         </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" name="email" placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="password" className="input input-bordered" />
           
          </div>
          <div className="form-control mt-6">
            <button className="btn  bg-[#425FEB] text-white hover:bg-yellow-500 ">Login</button>
          </div>
          <h3 className='mt-3'>Already have an account? <Link className='text-blue-500 font-serif' to='/registration'>Sign Up</Link> </h3>
        
        </div>
      </div>
    </div>
  </form>
      </div>
    );
};

export default Login;