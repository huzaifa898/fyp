import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Validation schema
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  investmentFocus: yup.string().when('role', {
    is: 'investor',
    then: yup.string().required('Investment focus is required'),
    otherwise: yup.string().nullable()
  }),
  industries: yup.string().when('role', {
    is: 'investor',
    then: yup.string().required('Industries are required'),
    otherwise: yup.string().nullable()
  }),
  investmentSize: yup.string().when('role', {
    is: 'investor',
    then: yup.string().required('Investment size is required'),
    otherwise: yup.string().nullable()
  }),
  businessName: yup.string().when('role', {
    is: 'entrepreneur',
    then: yup.string().required('Business name is required'),
    otherwise: yup.string().nullable()
  }),
  industry: yup.string().when('role', {
    is: 'entrepreneur',
    then: yup.string().required('Industry is required'),
    otherwise: yup.string().nullable()
  }),
  fundingRequired: yup.string().when('role', {
    is: 'entrepreneur',
    then: yup.string().required('Funding required is required'),
    otherwise: yup.string().nullable()
  }),
});

const AdminPanel = () => {
  const [role, setRole] = useState('investor');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: '********',
      role: 'investor',
      investmentFocus: '',
      industries: '',
      investmentSize: '',
      businessName: '',
      industry: '',
      fundingRequired: ''
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    setShowSuccessPopup(true);
    setTimeout(() => {
      setShowSuccessPopup(false);
    }, 3000);
  };

  return (
    <div className="container mx-auto p-4 mt-16">
      <h2 className="text-4xl font-bold text-center mb-8">Admin Panel</h2>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold">User Information</h3>
            <div className="flex items-center space-x-4">
              <div>
                <input
                  type="radio"
                  id="investor"
                  name="role"
                  value="investor"
                  checked={role === 'investor'}
                  onChange={(e) => setRole(e.target.value)}
                />
                <label htmlFor="investor" className="ml-2">Investor</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="entrepreneur"
                  name="role"
                  value="entrepreneur"
                  checked={role === 'entrepreneur'}
                  onChange={(e) => setRole(e.target.value)}
                />
                <label htmlFor="entrepreneur" className="ml-2">Entrepreneur</label>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex-1">
                <label className="block text-gray-700">Name</label>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => <input {...field} className="border rounded p-2 w-full max-w-xs text-sm" />}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>
              <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded text-sm ml-2 w-28">Update</button>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex-1">
                <label className="block text-gray-700">Email</label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => <input {...field} className="border rounded p-2 w-full max-w-xs text-sm" />}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
              <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded text-sm ml-2 w-28">Update</button>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex-1">
                <label className="block text-gray-700">Password</label>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => <input type="password" {...field} className="border rounded p-2 w-full max-w-xs text-sm" />}
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
              </div>
              <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded text-sm ml-2 w-28">Update</button>
            </div>
          </div>

          {role === 'investor' && (
            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-semibold mb-4">Investor Details</h3>
              <div>
                <label className="block text-gray-700">Investment Focus</label>
                <Controller
                  name="investmentFocus"
                  control={control}
                  render={({ field }) => <input {...field} className="w-full p-2 border rounded-md text-sm max-w-xs" />}
                />
                {errors.investmentFocus && <p className="text-red-500 text-sm">{errors.investmentFocus.message}</p>}
              </div>
              <div>
                <label className="block text-gray-700">Industries</label>
                <Controller
                  name="industries"
                  control={control}
                  render={({ field }) => <input {...field} className="w-full p-2 border rounded-md text-sm max-w-xs" />}
                />
                {errors.industries && <p className="text-red-500 text-sm">{errors.industries.message}</p>}
              </div>
              <div>
                <label className="block text-gray-700">Investment Size</label>
                <Controller
                  name="investmentSize"
                  control={control}
                  render={({ field }) => <input {...field} className="w-full p-2 border rounded-md text-sm max-w-xs" />}
                />
                {errors.investmentSize && <p className="text-red-500 text-sm">{errors.investmentSize.message}</p>}
              </div>
            </div>
          )}

          {role === 'entrepreneur' && (
            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-semibold mb-4">Entrepreneur Details</h3>
              <div>
                <label className="block text-gray-700">Business Name</label>
                <Controller
                  name="businessName"
                  control={control}
                  render={({ field }) => <input {...field} className="w-full p-2 border rounded-md text-sm max-w-xs" />}
                />
                {errors.businessName && <p className="text-red-500 text-sm">{errors.businessName.message}</p>}
              </div>
              <div>
                <label className="block text-gray-700">Industry</label>
                <Controller
                  name="industry"
                  control={control}
                  render={({ field }) => <input {...field} className="w-full p-2 border rounded-md text-sm max-w-xs" />}
                />
                {errors.industry && <p className="text-red-500 text-sm">{errors.industry.message}</p>}
              </div>
              <div>
                <label className="block text-gray-700">Funding Required</label>
                <Controller
                  name="fundingRequired"
                  control={control}
                  render={({ field }) => <input {...field} className="w-full p-2 border rounded-md text-sm max-w-xs" />}
                />
                {errors.fundingRequired && <p className="text-red-500 text-sm">{errors.fundingRequired.message}</p>}
              </div>
            </div>
          )}

          <div className="mt-6">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">Success</h3>
            <p>Your details have been successfully updated!</p>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
