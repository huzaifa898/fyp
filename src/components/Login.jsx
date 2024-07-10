import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import 'tailwindcss/tailwind.css';
import Header from './Header';

const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
});

const LoginForm = () => {
    <Header/>
    const [role, setRole] = useState('investor');
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = data => {
        console.log({ ...data, role });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/000/560/333/original/successful-businessman-teamwork-working-together-by-using-computer-and-laptop-giving-high-five-congratulation-each-other-after-their-job-finished-vector.jpg')" }}>
            <div className="w-full max-w-md bg-white bg-opacity-75 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                <div className="mb-4">
                    <label className="block text-gray-700">Role</label>
                    <div className="mt-2 flex justify-center">
                        <label className={`inline-flex items-center px-4 py-2 rounded ${role === 'investor' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                            <input
                                type="radio"
                                value="investor"
                                checked={role === 'investor'}
                                onChange={() => setRole('investor')}
                                className="form-radio hidden"
                            />
                            <span className="ml-2">Investor</span>
                        </label>
                        <label className={`inline-flex items-center px-4 py-2 rounded ${role === 'entrepreneur' ? 'bg-blue-500 text-white' : 'bg-gray-200'} ml-4`}>
                            <input
                                type="radio"
                                value="entrepreneur"
                                checked={role === 'entrepreneur'}
                                onChange={() => setRole('entrepreneur')}
                                className="form-radio hidden"
                            />
                            <span className="ml-2">Entrepreneur</span>
                        </label>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            {...register('email')}
                            className="w-full mt-2 p-2 border rounded"
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            {...register('password')}
                            className="w-full mt-2 p-2 border rounded"
                        />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </div>

                    <div className="mt-6">
                        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
