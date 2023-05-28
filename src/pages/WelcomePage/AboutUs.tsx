import React from 'react';
import { Item } from './Item';

const data = [
    {name: 'Viktoryia Karalenia', dev: 'Frontend Developer', img: ''},
    {name: 'Nikolay Balabanov', dev: 'Frontend Developer', img: ''},
    {name: 'Vladislav Kozlov', dev: 'Frontend Developer', img: ''},
]

export const AboutUs = () => {
  return (
    <div className='flex justify-between my-14 w-full'>
        {data.map(el => <Item key={el.name} name={el.name} dev={el.dev} img={el.img} />)}
    </div>
  )
}
