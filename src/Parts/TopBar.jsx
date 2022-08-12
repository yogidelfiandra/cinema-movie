import React from 'react';

export default function TopBar() {
  return (
    <div className='flex items-center justify-between'>
      <nav>
        <ul className='nav-menu flex gap-[30px]'>
          <li className='nav-item'>
            <a href='#' className='nav-link active'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link'>
              TV Show
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link'>
              Movie
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link'>
              Anime
            </a>
          </li>
        </ul>
      </nav>
      <div className='search-bar'>
        <div className='w-[600px] rounded-md pl-4 bg-[#131212]'>
          <label htmlFor='search' className='flex items-center'>
            <img className='mr-3' src='/icon/icon-search.svg' alt='' />
            <input
              type='text'
              id='search'
              className='search-input'
              placeholder='Search any type'
            />
          </label>
        </div>
      </div>
      <div>
        <div className='flex items-center gap-[30px] cursor-pointer'>
          <img src='/icon/icon-notification.svg' alt='' />
          <div className='flex items-center gap-3 '>
            <img src='/images/profile.png' alt='' />
            <img src='/icon/icon-dropdown.svg' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
