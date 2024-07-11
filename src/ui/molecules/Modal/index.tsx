import { ReactElement, useRef } from 'react';
import { cn } from '../../../utils/helpers/tailwindMerge';
import { useOnClickOutside } from '../../../utils/hooks';

interface Props {
  children: ReactElement;
  isOpen: boolean;
  handleIsOpen: (isOpen: boolean) => void;
}

const Modal = ({ children, isOpen, handleIsOpen }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => handleIsOpen(false));

  const handleCloseModal = () => {
    handleIsOpen(false);
  };

  return (
    <article
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-gray-300/40',
        isOpen ? 'block' : 'hidden',
      )}>
      <div
        ref={ref}
        className="bg-gray-500 flex h-full w-full items-center justify-center bg-opacity-50"
        onClick={handleCloseModal}>
        <div
          className="h-fit w-96 rounded-[1.563rem] border border-gray-200 bg-white p-4 shadow-xl"
          onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </article>
  );
};

export default Modal;
