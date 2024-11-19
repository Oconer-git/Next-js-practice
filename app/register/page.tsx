'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { FieldValues } from 'react-hook-form'
import axios from 'axios'

const RegisterUserPage = () => {
    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(5)
    })

    type FormData = z.infer<typeof schema>
    const {
        handleSubmit,
        formState: {errors},
        register
    } = useForm<FormData>({resolver: zodResolver(schema) })
    
    const onSubmit = async (data: FieldValues) => {
        const instance = await axios.post('/api/register', data).then(res => res.data);
        console.log(instance);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label className="mr-1">Email</label>
                {errors.email && <p>errrors.email.message</p>}
                <input
                    {...register('email')}
                    className="bg-gray-200" 
                    type="text" 
                />
            </fieldset>
            <fieldset>
                <label className="mr-1">Password</label>
                {errors.password && <p>errrors.password.message</p>}
                <input
                    {...register('password')} 
                    className="bg-gray-200" 
                    type="password"
                />
            </fieldset>
            <button className="btn btn-primary ml-2" type="submit">submit</button>
        </form>
  )
}

export default RegisterUserPage
