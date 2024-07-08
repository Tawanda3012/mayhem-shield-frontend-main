import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth, { db } from '../../firebase.init';
import { doc, setDoc } from 'firebase/firestore';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUpSuccessful, setSignUpSuccessful] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setSignUpSuccessful(true);
        } catch (error) {
            console.error('Error signing up:', error.message);
            setSignUpSuccessful(false);
        } finally {
            const user = auth.currentUser
            await setDoc(doc(db, "users", user.uid), {
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                type: "Admin"
            });
            setLoading(false);
        }

    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
            <h1 className="text-2xl font-bold mb-4">Admin Sign Up</h1>

            <form onSubmit={handleSignUp}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email:</label>
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
                    <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password:</label>
                    <input
                        type="password"
                        id="password"
                        minLength="6"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    disabled={loading}
                >
                    {loading ? (
                        <div className="flex justify-between items-center">
                            <div className="border-t-2 border-blue-100 animate-spin rounded-full w-5 h-5 mx-auto"></div>
                            Signing Up
                        </div>
                    ) : (
                        'Sign Up'
                    )}
                </button>
            </form>
            <NavLink to="/login" className="mt-4 text-blue-600">Login</NavLink>
            {isSignUpSuccessful && <div className="mt-4 text-green-600">Sign up successful! Please sign in.</div>}
        </div>
    );
};

export default SignUp;
