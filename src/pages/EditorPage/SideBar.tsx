import React, { useEffect, useState } from 'react';
import Loader from '../../components/UI/Loader';
import { rootAPI } from '../../redux/rootApi';
import { docQuery } from '../../shared/docQuery';

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [queryData, { data, isLoading }] = rootAPI.useGetApiDocQueryMutation();
  useEffect(() => {
    queryData({ query: docQuery });
  }, []);

  return (
    <div className="relative rounded-2xl bg-BGcolor1 p-2">
      <button
        className="px-3 relative z-10 py-2 rounded-md bg-green-700 text-textColor text-xs md:text-base"
        onClick={() => setIsOpen(!isOpen)}
      >
        Doc
      </button>
      <div
        className={`absolute z-1 left-0 top-0 rounded-2xl bg-BGcolor1 p-2 bottom-0 pt-[50px] border ${
          isOpen && 'border-red-500'
        }`}
      >
        {isOpen && (
          <div className="md:w-[50vw] bg-red-400">
            {isLoading ? (
              <Loader />
            ) : (
              <div>
                <pre>{JSON.stringify(data, null, 2)}</pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
