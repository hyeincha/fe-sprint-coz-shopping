import { useState } from 'react';
import Bookmark from '../ui/Bookmark.jsx';
import ItemModal from './ItemModal.jsx';
import { PRODUCT_TYPE } from '../../helpers/constants.js';
import { useDispatch } from 'react-redux';
import { addBookmark, deleteBookmark } from '../../redux/modules/productsSlice.js';
import { setToast, deleteToast } from '../../redux/modules/toastSlice.js';

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
  const dispatch = useDispatch();

  const handleBookmark = (e) => {
    e.stopPropagation();
    if (isBookmarked) {
      localStorage.removeItem(id);
      dispatch(deleteBookmark(id));
    } else {
      localStorage.setItem(id, 'bookmark!');
      dispatch(addBookmark(product));
    }
    const toastId = Date.now();
    dispatch(setToast({ id: toastId, isBookmarked }));
    setIsBookmarked(!isBookmarked);
    setTimeout(() => dispatch(deleteToast(toastId)), 2000);
  };

  const [showModal, setShowModal] = useState(false);

  switch (type) {
    case PRODUCT_TYPE.PRODUCT:
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
    case PRODUCT_TYPE.CATEGORY:
      content = (
        <div className='mt-2'>
          <h3 className='font-bold'># {title}</h3>
        </div>
      );
      break;
    case PRODUCT_TYPE.EXHIBITION:
      content = (
        <div className='mt-2'>
          <h3 className='font-bold mb-2'>{title}</h3>
          <span>{sub_title}</span>
        </div>
      );
      break;
    case PRODUCT_TYPE.BRAND:
      content = (
        <div className='flex justify-between mt-2'>
          <h3 className='font-bold'>{brand_name}</h3>
          <div className='flex flex-col text-right gap-2'>
            <span className='font-bold'>관심고객수</span>
            <span>{follower.toLocaleString()}</span>
          </div>
        </div>
      );
      break;
    default:
      content = <div>존재하지 않는 카테고리입니다.</div>;
  }

  return (
    <section className='relative w-[264px] py-7' onClick={() => setShowModal(true)}>
      <img
        src={type === PRODUCT_TYPE.BRAND ? brand_image_url : image_url}
        alt={type === PRODUCT_TYPE.BRAND ? `${brand_name} image` : `${title} image`}
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
