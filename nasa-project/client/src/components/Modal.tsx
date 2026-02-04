import { ReactNode, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  console.log({ isOpen });

  const handleOnClose = useCallback(
    ({ key }: KeyboardEvent) => {
      if (key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleOnClose);

    return () => {
      document.removeEventListener('keydown', handleOnClose);
    };
  }, [handleOnClose]);

  if (!isOpen) return <></>;

  return createPortal(
    <div className="fixed inset-0 z-50 flex size-full bg-black opacity-75">{children}</div>,
    document.body,
  );
};

export default Modal;
