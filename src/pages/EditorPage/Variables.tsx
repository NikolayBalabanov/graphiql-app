import React from 'react';

export const Variables = ({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="text-textColor text-xs md:text-base">
      <button type="button" onClick={() => setIsActive(!isActive)}>
        Variables
      </button>
    </div>
  );
};
