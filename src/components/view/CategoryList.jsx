import Category from '../ui/Category.jsx';

const categoryList = [
  {
    parameter: 'all',
    name: '전체',
    imgSrc: '/all.png',
  },
  {
    parameter: 'product',
    name: '상품',
    imgSrc: '/product.png',
  },
  {
    parameter: 'category',
    name: '카테고리',
    imgSrc: '/category.png',
  },
  {
    parameter: 'exhibition',
    name: '기획전',
    imgSrc: '/exhibition.png',
  },
  {
    parameter: 'brand',
    name: '브랜드',
    imgSrc: '/brand.png',
  },
];

function CategoryList() {
  return (
    <ul className='flex m-5 gap-8 justify-center'>
      {categoryList.map((category) => (
        <Category key={category.name} {...category} />
      ))}
    </ul>
  );
}

export default CategoryList;
