import React from 'react';
import { Request } from './Request';

export const Headers = ({isActive, setIsActive}:{isActive: boolean, setIsActive: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return <div className='text-textColor text-xs md:text-base '>
    <button type="button" onClick={() => setIsActive(!isActive)}>Headers</button>
  </div>;
};
