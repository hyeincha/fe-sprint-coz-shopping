import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Card from './Card';

function BookmarkList() {
  const [searchParams] = useSearchParams();
  const sort = searchParams.get('sort');
  const products = useSelector((state) =>
    state.products.filter((product) => !!localStorage.getItem(product.id))
  );
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (!sort || sort === 'all') {
      setFilteredProducts(products);
      return;
    }
    const newProducts = products.filter((product) => product.type.toLowerCase() === sort);
    setFilteredProducts(newProducts);
  }, [sort]);

  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(264px,1fr))] gap-10 justify-items-center justify-between px-24'>
      {filteredProducts.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}

export default BookmarkList;
