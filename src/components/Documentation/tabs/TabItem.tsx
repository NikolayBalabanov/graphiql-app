import React, { FC } from 'react';

interface ITabItem {
  name: string;
  onClick: () => void;
}

export const TabItem: FC<ITabItem> = ({ name, onClick }) => {
  return (
    <li>
      <button className="font-bold btn" onClick={onClick}>
        {name}
      </button>
    </li>
  );
};
