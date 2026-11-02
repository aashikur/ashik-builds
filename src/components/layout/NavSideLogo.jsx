import React from 'react';
import { Link } from 'react-router';

const NavSideLogo = () => {
    return (
      <Link to={'/'} className="relative border max-w-[1400px] mx-auto z-50">
        <div className="fixed left-10 top-8 z-50">
            <div className='px-3 flex items-center gap-2 p-1 justify-self-start rounded-full bg-black/10 backdrop-blur-[50px] border border-white/10'>
                <img
                    width={40}
                    height={40}
                    className='rounded-full w-10 h-10 object-cover border border-white/20'
                    src="/assets/images/me.jpg"
                    alt="Ashikur Rahaman"
                />
                <div className='inter-main leading-0.5 hidden xl:block'>
                    <p className='font-bold text-lg'>Ashikur Rahaman</p>
                    <p className='text-gray-400 outfit-main text-xs'>
                        Code Meets Creativity.
                    </p>
                </div>
            </div>
        </div>
      </Link>
    );
};

export default NavSideLogo;
