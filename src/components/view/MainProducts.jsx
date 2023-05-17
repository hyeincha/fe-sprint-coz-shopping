import Card from './Card';
import { useSelector } from 'react-redux';

function MainProducts() {
  const products = useSelector((state) => state.products);
  const mainProductsstyle = {
    title: 'font-bold text-[23px] pt-5',
    section:
      'grid grid-cols-[repeat(auto-fill,minmax(264px,1fr))] gap-14 justify-items-center justify-between',
  };

  return (
    <section className='px-24'>
      <h2 className={mainProductsstyle.title}>상품 리스트</h2>
      <section className={mainProductsstyle.section}>
        {products.slice(0, 4).map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </section>
      <h2 className={mainProductsstyle.title}>북마크 리스트</h2>
      <section className={mainProductsstyle.section}>
        {products
          .filter((item) => !!localStorage.getItem(item.id))
          .slice(0, 4)
          .map((product) => (
            <Card key={product.id} product={product} />
          ))}
      </section>
    </section>
  );
}

export default MainProducts;
