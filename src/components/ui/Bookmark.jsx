function Bookmark({ isBookmarked, bookmarkHandler, style }) {
  return (
    <img
      src={isBookmarked ? '/yellowstar.png' : '/greystar.png'}
      onClick={bookmarkHandler}
      className={style ?? 'absolute top-[185px] right-3 cursor-pointer'}
    />
  );
}

export default Bookmark;
