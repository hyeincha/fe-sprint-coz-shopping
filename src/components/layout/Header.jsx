import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';

function Header() {
  return (
    <header className='flex justify-between px-14 py-4 shadow-lg items-center'>
      <Link to='/'>
        <section className='flex gap-2 items-center'>
          <img src='../public/codestates.png' alt='코드스테이츠 로고' width='42' />
          <h1 className='text-2xl font-bold'>COZ Shopping</h1>
        </section>
      </Link>
      <RxHamburgerMenu size={26} />
    </header>
  );
}

export default Header;
