import React, { useState } from 'react';
import image1 from './images/design.jpg';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Name:", name);
        console.log("Username:", username);
        console.log("Email:", email);
        navigate('/profile-setup');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-yellow-100">
        {/* Image Section */}
                <div className="lg:w-1/2 flex justify-center">
                    <img
                        src={image1}
                        alt=""
                        className=" object-fill inset-y-0 left-5 w-full "
                    />
                </div>

                {/* Form Section */}
                     <div className=" p-8 flex flex-col justify-center">
                     <div className=" text-black font-semibold py-2 px-3 rounded mr-4">
        <div className=" absolute top-0 right-4">
        Already a member? <a href=" " className="flex justify-end text-pink-500">Sign In</a> </div>
                    <h1 className="text-4xl font-bold mb-6 text-center text-pink-600">MGS</h1>
                    <h2 className="text-2xl font-semibold mb-4 text-center">Discover the world's top Designers & Creatives.</h2>
                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="mb-6">
                            <div className="flex flex-col md:flex-row mb-4">
                                <div className="md:w-1/2 md:mr-3">
                                    <label htmlFor="name" className="block font-semibold mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={handleNameChange}
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-pink-600 transition-colors duration-300"
                                    />
                                </div>
                                <div className="md:w-1/2 md:ml-4 mt-4 md:mt-0">
                                    <label htmlFor="username" className="block font-semibold mb-1">Username</label>
                                    <input
                                        type="text"
                                        id="username"
                                        value={username}
                                        onChange={handleUsernameChange}
                                        className="w-full border border-grey-300 rounded-md px-3 py-2 focus:outline-none focus:border-pink-600 transition-colors duration-300"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block font-semibold mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600 transition-colors duration-300"
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <div className="flex items-center mb-4">
                                <input type="checkbox" id="terms" className="mr-2 rounded-sm" />
                                <label htmlFor="terms" className="text-sm">Creating an account means you're okay with our Terms of Service, Privacy Policy, and our default Notification Settings.</label>
                            </div>
                            <button type="submit" className="w-full bg-pink-600 text-white font-semibold py-3 rounded-md hover:bg-pink-700 transition-colors duration-300">Create Account</button>
                        </div>
                    </form>
                    <div className="text-center">
                        <p className="text-sm mb-2">This site is protected by reCAPTCHA and the Google</p>
                        <p className="text-sm">Privacy Policy and Terms of Service apply.</p>
                        <p className="text-sm mt-4">Art by Yash Jain</p>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default SignUpForm;
