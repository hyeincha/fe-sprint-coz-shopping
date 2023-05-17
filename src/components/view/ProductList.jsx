import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Card from './Card';

function ProductList() {
  const [searchParams] = useSearchParams();
  const sort = searchParams.get('sort');
  const products = useSelector((state) => state.products);
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
    <div className='flex flex-wrap justify-between px-24'>
      {filteredProducts.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
