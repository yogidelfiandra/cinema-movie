import React from 'react';
import MenuItem from './MenuItem';
import { LibraryMenu, SettingMenu, UserMenu } from './MenuList';

export default function SideBar() {
  return (
    <aside className='fixed w-[245px] h-full'>
      <div className='flex flex-col p-[30px] pr-0 border-r border-gray-100 h-full overflow-y-auto'>
        <a href='#' className='flex items-center mt-8 navbar-brand'>
          <img src='/images/logo.png' alt='logo-cinema' />
          <span className='text-white text-2xl font-semibold ml-3'>CINEMA</span>
        </a>

        <div className='link flex flex-col mt-[60px] h-full gap-[40px]'>
          <div>
            <div className='text-white text-base font-medium mb-5'>Menu</div>
            {UserMenu.map((menu) => (
              <MenuItem
                key={menu.text}
                link={menu.link}
                icon={menu.icon}
                text={menu.text}
                isActive={menu.isActive}
              />
            ))}
          </div>

          <div>
            <div className='text-white text-base font-medium mb-5'>Library</div>
            {LibraryMenu.map((menu) => (
              <MenuItem
                key={menu.text}
                link={menu.link}
                icon={menu.icon}
                text={menu.text}
              />
            ))}
          </div>

          <div>
            <div className='text-white text-base font-medium mb-5'>
              Settings
            </div>
            {SettingMenu.map((menu) => (
              <MenuItem
                key={menu.text}
                link={menu.link}
                icon={menu.icon}
                text={menu.text}
              />
            ))}
          </div>

          <div className='mt-60 '>
            <div className='text-lg font-normal text-[#717171] mb-10'>
              Darkmode
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
