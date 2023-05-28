import React, { FC } from 'react';

interface ITabItem {
  name: string;
  active: boolean;
  onClick: () => void;
}

export const TabItem: FC<ITabItem> = ({ name, active, onClick }) => {
  return (
    <li>
      <button className={`font-bold ${active ? 'active-btn' : 'btn'}`} onClick={onClick}>
        {name}
      </button>
    </li>
  );
};
