import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../sharedComponent/Navbar';
// import { AuthContext } from './Provider';

const Registration = () => {
    // const { RegistrationUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    
    const handleRegistration = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
     

        try {
            // Register the user with Firebase
            await RegistrationUser(email, password);
            const user = await updateUserProfile(name,email );

            // Add user information to your server
            const saveUser = { name, email };
            const response = await fetch('https://meet-tech-lab-server.vercel.app/users', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(saveUser),
            });

            if (response.ok) {
                Swal.fire({
                    title: 'Registration Successful',
                    text: 'User created successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                navigate('/');
            } else {
                throw new Error('Failed to create user on the server');
            }
        } catch (error) {
            console.error('Registration error:', error);
            Swal.fire({
                title: 'Registration Error',
                text: 'An error occurred during registration.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src="https://i.ibb.co/c31qGdK/Login.jpg" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg bg-base-100">
                        <div className="card-body font-serif">
                            <div className='mb-2'>
                                <h3 className='text-2xl mb-2 font-bold font-serif'>Registration Now </h3>
                                <p className='text-xl'>Enter your details to register.</p>
                            </div>
                            <form onSubmit={handleRegistration}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="enter your name" className="input input-bordered md:w-96" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered  md:w-96" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered md:w-96" required />
                                </div>
                           
                         
                              
                                <div className="form-control mt-6 md:w-96">
                                    <button className="btn btn-outline text-white bg-red-600" disabled={loading} >Registration</button>
                                </div>
                            </form>
                            <h3 className='mt-3'>Already have an account? <Link className='text-blue-500 font-serif' to='/login'>Sign In</Link> </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;