function Bookmark({ isBookmarked, bookmarkHandler }) {
  return (
    <img
      src={isBookmarked ? '/yellowstar.png' : '/greystar.png'}
      onClick={bookmarkHandler}
      className='absolute top-[185px] right-3'
    />
  );
}

export default Bookmark;
