import React from 'react';
import { Container } from './Container';
import { SideBar } from './SideBar';

const index = () => {
  return (
    <div className='flex h-full'>
        <SideBar />
        <Container />
    </div>
  )
}
export default index;
