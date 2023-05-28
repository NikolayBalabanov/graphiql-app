import React, { useEffect, useRef, useState } from 'react';
import { DocsBtn } from '../../components/Documentation/DocsBtn';
import { Documentation } from '../../components/Documentation/Documentation';

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMounted = useRef(false);
  const slide = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (isOpen) {
      slide.current?.classList.remove('hidden');
      setTimeout(() => {
        slide.current?.classList.remove('-translate-x-full');
      });
    } else {
      slide.current?.classList.add('hidden');
    }
  }, [isOpen]);
  const onClose = () => {
    slide.current?.classList.add('-translate-x-full');
    setTimeout(() => setIsOpen(false), 300);
  };
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    }
  }, [isOpen]);
  return (
    <div className="relative rounded-2xl bg-BGcolor1 p-2 ">
      <DocsBtn disabled={isOpen} onClick={() => setIsOpen(true)} />
      {isMounted.current && <Documentation item={slide} onClose={onClose} />}
    </div>
  );
};
