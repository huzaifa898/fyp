import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import 'tailwindcss/tailwind.css';
import Header from './Header';
import regist from '../images/regist.jpg'
const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    role: yup.string().required('Role is required'),
    interest: yup.string().required('Area of Interest is required'),
    investmentAmount: yup.number().when('role', {
        is: 'investor',
        then: yup.number().required('Investment Amount is required').positive('Must be positive').integer('Must be an integer')
    }),
    businessIdea: yup.string().when('role', {
        is: 'entrepreneur',
        then: yup.string().required('Business Idea is required')
    }),
});

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = data => {
        console.log(data);
    };

    const role = watch('role');

    return (
        <div>
            <Header />
            <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${regist})`, }}>
                <div className="w-full max-w-lg bg-white bg-opacity-75 p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-6 font-abc">Registration Form</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-abc">Name</label>
                            <input
                                type="text"
                                {...register('name')}
                                className="w-full mt-2 p-2 border rounded"
                            />
                            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-abc">Email</label>
                            <input
                                type="email"
                                {...register('email')}
                                className="w-full mt-2 p-2 border rounded"
                            />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-abc">Password</label>
                            <input
                                type="password"
                                {...register('password')}
                                className="w-full mt-2 p-2 border rounded"
                            />
                            {errors.email && <p className="text-red-500">{errors.passwordl.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-abc">Role</label>
                            <div className="mt-2">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        value="investor"
                                        {...register('role')}
                                        className="form-radio"
                                    />
                                    <span className="ml-2 font-abc">Investor</span>
                                </label>
                                <label className="inline-flex items-center ml-6">
                                    <input
                                        type="radio"
                                        value="entrepreneur"
                                        {...register('role')}
                                        className="form-radio"
                                    />
                                    <span className="ml-2 font-abc">Entrepreneur</span>
                                </label>
                            </div>
                            {errors.role && <p className="text-red-500">{errors.role.message}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-abc">Area of Interest</label>
                            <input
                                type="text"
                                {...register('interest')}
                                className="w-full mt-2 p-2 border rounded"
                            />
                            {errors.interest && <p className="text-red-500">{errors.interest.message}</p>}
                        </div>

                        {role === 'investor' && (
                            <div className="mb-4">
                                <label className="block text-gray-700 font-abc">Investment Amount</label>
                                <input
                                    type="number"
                                    {...register('investmentAmount')}
                                    className="w-full mt-2 p-2 border rounded"
                                />
                                {errors.investmentAmount && <p className="text-red-500">{errors.investmentAmount.message}</p>}
                            </div>
                        )}

                        {role === 'entrepreneur' && (
                            <div className="mb-4">
                                <label className="block text-gray-700 font-abc">Business Idea</label>
                                <textarea
                                    {...register('businessIdea')}
                                    className="w-full mt-2 p-2 border rounded"
                                />
                                {errors.businessIdea && <p className="text-red-500">{errors.businessIdea.message}</p>}
                            </div>
                        )}

                        <div className="mt-6">
                            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded font-abc">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
