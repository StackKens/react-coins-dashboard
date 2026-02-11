import { Link } from 'react-router';

const Header = () => {
  return (
    <div className='py-3 px-10 flex  justify-end gap-7 bg-neutral-50'>
      <Link to='/' className='text-blue-500 font-bold'>
        Home
      </Link>
      <Link to='/about' className='text-blue-500 font-bold'>
        About
      </Link>
    </div>
  );
};

export default Header;
