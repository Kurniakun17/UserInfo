import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

type UserData = {
  name: String,
  email: String,
  age: String,
  gender: String,
  id: String,
}

export const AddForm = () => {
  const {register, handleSubmit} = useForm<UserData>();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    axios.post('http://localhost:3000/add', {
      ...data
    }).then(()=>{
      console.log("success");
      navigate('/');
    })
    .catch(err => console.log(err.message))
  })

  return (
    <div className=''>
      <h1 className='mb-3 font-extrabold text-4xl'>Add User</h1>
      <div className='mx-auto p-5 bg-black/10 rounded border border-slate-600 w-[50%]'>
      <form className='flex flex-col' onSubmit={onSubmit}>
          <label htmlFor="Name">Name</label>
          <input className=' rounded p-1 mt-1 text-black' {...register('name')} id="Name" type="text" required placeholder='Name'/>
          <label className='mt-2' htmlFor="Age">Age</label>
          <input className=' rounded p-1 mt-1 text-black' {...register('age')} id="Age" type="number" required placeholder='Age'/>
          <label className='mt-2' htmlFor="Email">Email</label>
          <input className=' rounded p-1 mt-1 text-black' {...register('email')} id="Email" type="email" required placeholder='Email'/>
          <label className='mt-2'htmlFor="Gender">Gender</label>
          <select className='text-black p-1 mt-1' {...register('gender')} name="" id="">
            <option value="Male">Male</ option>
            <option value="Female">Female</option>
          </select>
          <div className='w-fit font-semibold bg-teal-500 py-2 px-6 mt-4 rounded'>
            <button>
              Submit
            </button>
          </div>
      </form>
      </div>
    </div>
  )
}
