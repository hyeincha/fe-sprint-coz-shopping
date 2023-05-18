import Card from './Card';
import { useSelector } from 'react-redux';
import Empty from '../ui/Empty';

function MainProducts() {
  const { products, bookmarks } = useSelector((state) => state.products);
  const mainProductsstyle = {
    title: 'font-bold text-[23px] pt-5',
    section: 'flex calc',
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
        {bookmarks.length > 0 ? (
          bookmarks.slice(0, 4).map((product) => <Card key={product.id} product={product} />)
        ) : (
          <Empty />
        )}
      </section>
    </section>
  );
}

export default MainProducts;
