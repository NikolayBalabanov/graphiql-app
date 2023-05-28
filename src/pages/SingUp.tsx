import React from 'react';
import { SignInUp } from '../components/signInUp/SignInUp';

function SingUp() {
  return (
    <div className="flex justify-center h-screen">
      <SignInUp type={true} />
    </div>
  );
}

export default SingUp;
