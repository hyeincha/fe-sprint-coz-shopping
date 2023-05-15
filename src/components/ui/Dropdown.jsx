import { HiOutlineGift, HiOutlineStar } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

function Dropdown({ setIsOpen }) {
  const navigate = useNavigate();

  const handleLinkClick = (url) => {
    setIsOpen(false);
    navigate(url);
  };

  const dropdownStyle = {
    ul: 'bg-white shadow-[0_2px_10px_1px_rgba(0,0,0,0.1)] rounded-lg absolute top-14 right-6',
    hi: 'px-6 py-4 text-center cursor-default',
    li: 'flex gap-2 px-6 py-4 items-center border-t border-solid border-slate-200 hover:bg-slate-100',
  };

  return (
    <ul className={dropdownStyle.ul}>
      <li className={dropdownStyle.hi}>회원님, 안녕하세요!</li>
      <li className={dropdownStyle.li} onClick={() => handleLinkClick('/products/list')}>
        <HiOutlineGift size={23} />
        상품리스트 페이지
      </li>
      <li className={dropdownStyle.li} onClick={() => handleLinkClick('/bookmark')}>
        <HiOutlineStar size={23} />
        북마크 페이지
      </li>
    </ul>
  );
}

export default Dropdown;
