import React from 'react';
import { Item } from './Item';

const data = [
  { name: 'viktoria', img: 'https://avatars.githubusercontent.com/u/95419157?v=4' },
  { name: 'nikolay', pos: 'teamlead', img: 'https://avatars.githubusercontent.com/u/96470401?v=4' },
  { name: 'vladislav', img: 'https://avatars.githubusercontent.com/u/89528468?v=4' },
];

export const AboutUs = () => {
  return (
    <div className="flex justify-between my-14 w-full">
      {data.map((el) => (
        <Item key={el.name} name={el.name} img={el.img} pos={el.pos} />
      ))}
    </div>
  );
};
