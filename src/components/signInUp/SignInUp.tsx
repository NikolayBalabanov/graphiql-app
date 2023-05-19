import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { auth, registerUser, sendPasswordReset } from '../../firebase';
import { getErrString } from '../../utils/getErrString';
import { TranslationProvider, Translation } from 'i18nano';
import { translations } from '../../translations';

type FormFields = {
  email: string;
  password: string;
  name?: string;
};

export const SignInUp = () => {
  const [user] = useAuthState(auth);
  const [logInWithEmailAndPassword, , logLoading, logError] = useSignInWithEmailAndPassword(auth);
  const [registerWithEmailAndPassword, , regLoading, regError] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    const { email, password, name } = data;
    if (isSignUp) {
      registerWithEmailAndPassword(email, password).then((user) => {
        if (user) {
          registerUser(user.user.uid, email, name!);
        }
      });
    } else {
      logInWithEmailAndPassword(email, password);
    }
  };
  useEffect(() => {
    if (user) {
      navigate('/editor');
    }
  }, [user, logLoading, regLoading, navigate]);
  return (
    <TranslationProvider translations={translations.signIn}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center self-center px-1 py-6 min-h-fit w-3/5 border rounded-md my-4 font-semibold"
        noValidate
      >
        {isSignUp && (
          <input
            type="text"
            id="name"
            placeholder="Ivan"
            className={errors.name ? 'm-2 rounded-md border-red-600' : 'm-2 rounded-md'}
            {...register('name', {
              required: true,
              pattern: { value: /[A-Z]{1}/, message: 'name' },
            })}
          />
        )}{' '}
        {isSignUp && (
          <p className="text-xs text-red-600 mx-2">
            <Translation path={errors.name?.message || ''} />
          </p>
        )}
        <input
          type="email"
          id="email"
          placeholder="example@ex.com"
          className={errors.email ? 'm-2 rounded-md border-red-600' : 'm-2 rounded-md'}
          {...register('email', {
            required: true,
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: 'email',
            },
          })}
        />
        {
          <p className="text-xs text-red-600 mx-2">
            <Translation path={errors.email?.message || ''} />
          </p>
        }
        <input
          type="password"
          id="password"
          placeholder="Password"
          className={errors.password ? 'm-2 rounded-md border-red-600' : 'm-2 rounded-md'}
          {...register('password', {
            required: true,
            pattern: {
              value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
              message: 'password',
            },
          })}
        />
        {
          <p className="text-xs text-red-600 mx-2">
            <Translation path={errors.password?.message || ''} />
          </p>
        }
        {!isSignUp && logError?.code && (
          <p className="text-xs text-red-600 mx-2">{getErrString(logError.code)}</p>
        )}
        {isSignUp && regError?.code && (
          <p className="text-xs text-red-600 mx-2">{getErrString(regError.code)}</p>
        )}
        <Button type="submit" text={isSignUp ? 'signUp' : 'signIn'}></Button>
        {!isSignUp ? (
          <p>
            <Translation path="notRegistered" />
            <Button type="button" text="signUp" onClick={() => setIsSignUp(true)}></Button>
          </p>
        ) : (
          <p>
            <Translation path="registered" />
            <Button type="button" text="signIn" onClick={() => setIsSignUp(false)}></Button>
            {/* <Button
            type="button"
            text="signIn"
            onClick={() => sendPasswordReset('nikola.balabanov93@gmail.com')}
          ></Button> */}
          </p>
        )}
      </form>
    </TranslationProvider>
  );
};
