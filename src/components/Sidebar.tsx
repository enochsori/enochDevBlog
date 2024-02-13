import { TbBrandNeteaseMusic } from 'react-icons/tb';
import { FaHome } from 'react-icons/fa';
import { MdSearch } from 'react-icons/md';
import { RiMessage2Fill } from 'react-icons/ri';

import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <section className='h-[100vh] w-80 border-r border-zinc-600 shadow-lx'>
      <header className='w-full h-80 flex flex-col justify-center items-center border-b border-zinc-600'>
        <img
          src='\images\profile.png'
          alt='profile image'
          className='h-20 rounded-xl bg-whi'
        />
        <div className='flex items-center justify-center mt-4 font-bold'>
          <span className='mr-2'>enochSori Dev</span>
          <TbBrandNeteaseMusic className='text-lg mt-1 ' />
        </div>
        <div>
          <Link to='/'>
            <Fahome />
          </Link>
          <Link to='/'>
            <MdSearch />
          </Link>
          <Link to='/'>
            <RiMessage2Fill />
          </Link>
        </div>
      </header>
    </section>
  );
}
