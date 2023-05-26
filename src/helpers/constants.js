export const PRODUCT_TYPE = {
  PRODUCT: 'Product',
  CATEGORY: 'Category',
  EXHIBITION: 'Exhibition',
  BRAND: 'Brand',
};

export const CATEGORY_LIST = [
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

export const TOAST_MESSAGE = {
  REMOVE: '상품이 북마크에서 제거되었습니다.',
  ADD: '상품이 북마크에 추가되었습니다.',
};
