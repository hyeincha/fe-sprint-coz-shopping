import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import Card from './Card';
import Empty from '../ui/Empty';

function BookmarkList() {
  const [searchParams] = useSearchParams();
  const sort = searchParams.get('sort');
  const isAll = !sort || sort === 'all';
  const { bookmarks } = useSelector((state) => state.products);
  const [filteredBookmarks, setFilteredBookmarks] = useState(bookmarks.slice(0, 15));
  const scrollRef = useRef(null);

  useInfiniteScroll(scrollRef, () => {
    setFilteredBookmarks((prev) => {
      let currentLength = prev.length + 15;
      if (bookmarks.length <= currentLength) currentLength = bookmarks.length;
      return [...prev, ...bookmarks.slice(prev.length, currentLength)];
    });
  });

  useEffect(() => {
    if (isAll) {
      setFilteredBookmarks(bookmarks.slice(0, 15));
      return;
    }
    const newBookmarks = bookmarks.filter((bookmark) => bookmark.type.toLowerCase() === sort);
    setFilteredBookmarks(newBookmarks);
  }, [sort]);

  if (filteredBookmarks.length === 0) return <Empty />;

  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(264px,1fr))] gap-10 justify-items-center justify-between px-24'>
      {filteredBookmarks.map((product) => (
        <Card key={product.id} product={product} />
      ))}
      {isAll && <span ref={scrollRef}></span>}
    </div>
  );
}

export default BookmarkList;
