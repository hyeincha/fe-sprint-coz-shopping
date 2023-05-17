import { useState } from 'react';
import Bookmark from '../ui/Bookmark.jsx';
import ItemModal from './ItemModal.jsx';

function Card({ product }) {
  const {
    id,
    type,
    title,
    sub_title,
    brand_name,
    price,
    discountPercentage,
    image_url,
    brand_image_url,
    follower,
  } = product;
  let content;

  const [isBookmarked, setIsBookmarked] = useState(!!localStorage.getItem(id));

  const handleBookmark = (e) => {
    e.stopPropagation();
    isBookmarked ? localStorage.removeItem(id) : localStorage.setItem(id, 'bookmark!');
    setIsBookmarked(!isBookmarked);
  };

  const [showModal, setShowModal] = useState(false);

  switch (type) {
    case 'Product':
      content = (
        <div className='flex justify-between mt-2'>
          <h3 className='font-bold'>{title}</h3>
          <div className='flex flex-col text-right gap-2'>
            <span className='font-bold text-[#452CDD]'>{discountPercentage}%</span>
            <span>{Number(price).toLocaleString()}원</span>
          </div>
        </div>
      );
      break;
    case 'Category':
      content = (
        <div className='mt-2'>
          <h3 className='font-bold'># {title}</h3>
        </div>
      );
      break;
    case 'Exhibition':
      content = (
        <div className='mt-2'>
          <h3 className='font-bold mb-2'>{title}</h3>
          <span>{sub_title}</span>
        </div>
      );
      break;
    default:
      content = (
        <div className='flex justify-between mt-2'>
          <h3 className='font-bold'>{brand_name}</h3>
          <div className='flex flex-col text-right gap-2'>
            <span className='font-bold'>관심고객수</span>
            <span>{follower.toLocaleString()}</span>
          </div>
        </div>
      );
  }

  return (
    <section className='relative w-[264px] py-7' onClick={() => setShowModal(true)}>
      <img
        src={type === 'Brand' ? brand_image_url : image_url}
        alt={type === 'Brand' ? `${brand_name} image` : `${title} image`}
        className='rounded-xl w-[264px] h-48'
      />
      <Bookmark isBookmarked={isBookmarked} bookmarkHandler={handleBookmark} />
      {content}
      {showModal && (
        <ItemModal
          onClose={(e) => {
            e.stopPropagation();
            setShowModal(false);
          }}
          imageUrl={image_url ?? brand_image_url}
          title={title ?? brand_name}
          bookmarkHandler={handleBookmark}
          isBookmarked={isBookmarked}
        />
      )}
    </section>
  );
}

export default Card;
