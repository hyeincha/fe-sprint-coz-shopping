import { useEffect } from 'react';

function useInfiniteScroll(ref, callback) {
  const options = { threshold: 0 };
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) callback();
  }, options);

  useEffect(() => {
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref.current]);
}

export default useInfiniteScroll;
