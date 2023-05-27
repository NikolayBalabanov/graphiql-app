import React from 'react';

export const Headers = ({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: () => void;
}) => {
  return (
    <div className="text-textColor text-xs md:text-base ">
      <button
        className={isActive ? 'active-btn' : 'btn'}
        type="button"
        onClick={() => setIsActive()}
      >
        Headers
      </button>
    </div>
  );
};
