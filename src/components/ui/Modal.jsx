import { createPortal } from 'react-dom';

function Modal({ onClose, children }) {
  return createPortal(
    <section
      className='fixed flex justify-center items-center top-0 right-0 bottom-0 left-0 z-10 w-full h-full bg-[#ffffff7f]'
      onClick={onClose}
    >
      {children}
    </section>,
    document.getElementById('modal')
  );
}

export default Modal;
