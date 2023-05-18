import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import Card from './Card';

function ProductList() {
  const [searchParams] = useSearchParams();
  const sort = searchParams.get('sort');
  const isAll = !sort || sort === 'all';
  const products = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const scrollRef = useRef(null);

  useInfiniteScroll(scrollRef, () => {
    setFilteredProducts((prev) => {
      let currentLength = prev.length + 25;
      if (products.length <= currentLength) currentLength = products.length;
      return [...prev, ...products.slice(prev.length, currentLength)];
    });
  });

  useEffect(() => {
    if (isAll) {
      setFilteredProducts(products.slice(0, 30));
      return;
    }
    const newProducts = products.filter((product) => product.type.toLowerCase() === sort);
    setFilteredProducts(newProducts);
  }, [sort]);

  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(264px,1fr))] justify-items-center gap-10 px-24'>
      {filteredProducts.map((product) => (
        <Card key={product.id} product={product} />
      ))}
      {isAll && <span ref={scrollRef}></span>}
    </div>
  );
}

export default ProductList;
