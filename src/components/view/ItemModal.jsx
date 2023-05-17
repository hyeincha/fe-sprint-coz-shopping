import { MdClose } from 'react-icons/md';
import Modal from '../ui/Modal.jsx';
import Bookmark from '../ui/Bookmark.jsx';

function ItemModal({ imageUrl, onClose, title, isBookmarked, bookmarkHandler }) {
  return (
    <Modal onClose={onClose}>
      <main
        className='relative flex justify-center items-center shadow-lg'
        onClick={(e) => e.stopPropagation()}
      >
        <img className='rounded-xl w-[744px] h-[480px]' src={imageUrl} />
        <MdClose className='absolute top-3 right-3' size='35' color='white' onClick={onClose} />
        <Bookmark
          isBookmarked={isBookmarked}
          bookmarkHandler={bookmarkHandler}
          style='absolute left-5 bottom-5'
        />
        <h3 className='absolute left-14 bottom-4 text-xl font-semibold text-white'>{title}</h3>
      </main>
    </Modal>
  );
}

export default ItemModal;
