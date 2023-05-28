import React from 'react';
import { Container } from './Container';
import { SideBar } from './SideBar';

const index = () => {
  return (
    <div className="flex gap-3 flex-col md:flex-row">
      <SideBar />
      <Container />
    </div>
  );
};
export default index;
