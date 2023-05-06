import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from './Input';
import { Button } from './Button';

type FormFields = {
  email: string,
  password: string,
  name?: string,
};

export const SignInUp = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = data => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center self-center px-1 py-6 h-60 w-3/5 border rounded-md my-4 font-semibold">
      {isSignUp && <Input type="text" id="name" placeholder="Ivan" label="name" register={register} required />}
      <Input type="email" id="email" placeholder="example@ex.com" label="email" register={register} required />
      <Input type="password" id="password" placeholder="Password" label="password" register={register} required />
      <Button type="submit" text={isSignUp ? 'Sign Up' : 'Sign In'}></Button>
      {!isSignUp
       ? <p>
        Not registered yet?
        <Button type="button" text="Sign up" onClick={() => setIsSignUp(true)}></Button>
      </p>
      : <p>
      I already have profile
      <Button type="button" text="Sign In" onClick={() => setIsSignUp(false)}></Button>
    </p>
    }

    </form>
  )
}
