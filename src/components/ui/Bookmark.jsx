import { useState } from 'react';

function Bookmark({ id }) {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  const [isBookmarked, setIsBookmarked] = useState(bookmarks.includes(id));

  const bookmarkHandler = () => {
    if (isBookmarked) {
      // 로컬스토리지의 배열에서 요소 삭제
      const newBookmarks = bookmarks.filter((postId) => postId !== id);
      localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
      // TODO: 북마크 제거 토스트 띄우기
    } else {
      // 로컬스토리지 배열에 요소 추가
      bookmarks.push(id);
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      // TODO: 북마크 추가 토스트 띄우기
    }
    setIsBookmarked((prev) => !prev);
  };

  return (
    <img
      src={isBookmarked ? 'public/yellowstar.png' : 'public/greystar.png'}
      onClick={bookmarkHandler}
      className='absolute top-[173px] right-3'
    />
  );
}

export default Bookmark;
