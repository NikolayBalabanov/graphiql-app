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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center self-center px-1 py-6 h-60 w-3/5 border rounded-md my-4 font-semibold"
      noValidate
      >
      {isSignUp &&
                <input
                type="text"
                id="name"
                placeholder="Ivan"
                className="m-2 rounded-md"
                {...register("name", {required: true, pattern:{            value: /[A-Z]{1}/,
                message: 'Your name should start with uppercase letter'}})}
              />
}                  {isSignUp && errors.name?.message}

      <input
      type="email"
      id="email"
      placeholder="example@ex.com"
      className="m-2 rounded-md"
      {...register("email", {required: true, pattern:{
        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        message:" Enter valid email"
      }})}
    />
        {errors.email?.message}

          <input
      type="password"
      id="password"
      placeholder="Password"
      className="m-2 rounded-md"
      {...register("password", {required: true, pattern:{
        value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
        message: 'Your password should contain 1 uppercase letter, 1 lowercase letter, 1 digit, min length 8'
      }})}
    />
    {errors.password?.message}

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
