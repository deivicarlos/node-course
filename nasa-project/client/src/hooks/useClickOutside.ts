import { RefObject, useEffect, useRef } from 'react';

export const useClickOutside = <T extends HTMLElement>(ref: RefObject<T>, callback: () => void) => {
  const cbRef = useRef(callback);

  useEffect(() => {
    cbRef.current = callback;
  }, [callback]);

  useEffect(() => {
    function handleOnClick({ target }: PointerEvent) {
      const el = ref.current;

      if (!el) return;

      if (target instanceof Node && !el.contains(target)) {
        cbRef.current();
      }
    }

    document.addEventListener('pointerdown', handleOnClick);

    return () => {
      document.removeEventListener('pointerdown', handleOnClick);
    };
  }, []);
};
