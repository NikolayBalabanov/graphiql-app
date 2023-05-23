import React from 'react';
import { Container } from './Container';
import { SideBar } from './SideBar';

const index = () => {
  return (
    <div className="flex gap-3">
      <SideBar />
      <Container />
    </div>
  );
};
export default index;
