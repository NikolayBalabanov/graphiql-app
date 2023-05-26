import React, { FC, MutableRefObject, Suspense, lazy, useEffect, useRef } from 'react';
import Loader from '../UI/Loader';

const DocsContainer = lazy(() => import('../Documentation/DocsContainer'));

interface IDocumentation {
  onClose: () => void;
  item: MutableRefObject<HTMLDivElement | null>;
}

export const Documentation: FC<IDocumentation> = ({ onClose, item }) => {
  //   const isMounted = useRef(false);
  //   useEffect(() => {
  //     if (isMounted.current) return;
  //     isMounted.current = true;
  //   }, [isMounted.current]);
  return (
    <div
      ref={item}
      className="absolute z-1 left-0 top-0 md:w-[50vw] rounded-2xl bg-BGcolor1 p-2 bottom-0 border border-gray-600 -translate-x-full hidden duration-300 transition-transform"
    >
      <Suspense fallback={<Loader />}>
        <DocsContainer onClose={onClose} />
      </Suspense>
    </div>
  );
};
