import React, { FC } from 'react';
import { AiFillCaretLeft, AiFillDatabase } from 'react-icons/ai';

interface IDocsBtn {
  onClick: () => void;
  isClose?: boolean;
  disabled?: boolean;
}

export const DocsBtn: FC<IDocsBtn> = ({ onClick, isClose, disabled = false }) => {
  return (
    <button
      key="burgerBtn"
      className="px-3 py-2 rounded-md text-textColor text-xs md:text-base"
      onClick={onClick}
      disabled={disabled}
    >
      {isClose ? <AiFillCaretLeft /> : <AiFillDatabase />}
    </button>
  );
};
