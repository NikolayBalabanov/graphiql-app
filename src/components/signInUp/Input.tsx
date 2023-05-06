import React from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
interface InputProps{
    type: string,
    id: string,
    placeholder: string,
    register: UseFormRegister<FormFields>;
    required: boolean,
    label: Path<FormFields>
}
type FormFields = {
    email: string,
    password: string,
    name?: string,
  };

export const Input = ({type, id, placeholder, label,  register, required}: InputProps) => {
  return (
    <input type={type} id={id} placeholder={placeholder} className="m-2 rounded-md" {...register(label, {required: true})} />
  )
}
