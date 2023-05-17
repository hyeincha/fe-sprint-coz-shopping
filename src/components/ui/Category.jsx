import { useSearchParams } from 'react-router-dom';

function Category({ parameter, name, imgSrc }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const setSortParams = () => {
    searchParams.set('sort', parameter);
    setSearchParams(searchParams);
  };

  const sort = searchParams.get('sort');

  const activeStyle =
    'text-[#412DD4] underline decoration-[#412DD4] decoration-[2.5px] font-semibold';

  return (
    <li className='flex flex-col items-center gap-1' onClick={setSortParams}>
      <img src={imgSrc} alt={name} width={70} />
      <span className={`text-sm ${sort === parameter ? activeStyle : ''}`}>{name}</span>
    </li>
  );
}

export default Category;
