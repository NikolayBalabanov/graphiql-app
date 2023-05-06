import React from 'react';
import { Path, UseFormRegister, ValidationRule } from 'react-hook-form';
interface InputProps{
    type: string,
    id: string,
    placeholder: string,
    register: UseFormRegister<FormFields>;
    required: boolean,
    label: Path<FormFields>,
    validation: RegExp | string | number,
}
type FormFields = {
    email: string,
    password: string,
    name?: string,
  };

export const Input = ({type, id, placeholder, label,  register, required, validation}: InputProps) => {
  const nameValidator = (val: string) => {
    if(val.length < 3) return false
  }

  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="m-2 rounded-md"
      {...register(label, {required: true})}
    />
  )
}
