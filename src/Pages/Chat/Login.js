import React, { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { NavLink } from 'react-router-dom';
import ForgetPassPopUp from './ForgetPassPopUp';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);

    const auth = getAuth();

    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error('Error signing in:', error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => onAuthStateChanged(auth, (user) => setLoggedIn(!!user)), [auth]);

    const handleSignout = async () => {
        await signOut(auth);
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
            <h1 className="text-2xl font-bold mb-4">Admin Login</h1>

            {!isLoggedIn ? (
                <>
                    <form onSubmit={handleSignIn}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                                Password:
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-500  text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                            disabled={loading}
                        >
                            {loading ? (
                                <div className="flex gap-3 justify-between items-center">
                                    <div className="border-t-2 border-blue-100 animate-spin rounded-full w-5 h-5 mx-auto"></div>
                                    Logging In
                                </div>
                            ) : (
                                'Log In'
                            )}
                        </button>
                    </form>

                </>
            ) : (
                <div className='flex justify-between'>
                    <button
                        onClick={handleSignout}
                        className="btn btn-primary text-white "
                    >
                        Sign Out
                    </button>
                    <NavLink
                        to="/adminchathome"
                        className="btn btn-primary text-white "
                    >
                        Admin Chat Home
                    </NavLink>

                </div>
            )}
            <br />
            <NavLink to="/signup" className="mt-4 text-end w-full text-blue-600">Sign up</NavLink>
            {isLoggedIn && <div className="mt-4 text-green-600">You are Logged in!</div>}
        </div>
    );
};

export default Login;
