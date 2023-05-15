import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import Dropdown from '../ui/Dropdown.jsx';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => document.body.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <header className='flex justify-between px-14 py-4 shadow-lg items-center'>
      <Link to='/'>
        <section className='flex gap-2 items-center cursor-pointer'>
          <img src='../public/codestates.png' alt='코드스테이츠 로고' width='42' />
          <h1 className='text-2xl font-bold'>COZ Shopping</h1>
        </section>
      </Link>
      <nav className='cursor-pointer' ref={dropdownRef}>
        <RxHamburgerMenu size={26} onClick={() => setIsOpen(!isOpen)} />
        {isOpen && <Dropdown setIsOpen={setIsOpen} />}
      </nav>
    </header>
  );
}

export default Header;
