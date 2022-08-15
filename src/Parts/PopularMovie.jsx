import React from 'react';

import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
  BookmarkIcon,
} from '@heroicons/react/outline';

export default function PopularMovie() {
  return (
    <div className=''>
      <div className='flex items-center justify-between mb-[30px]'>
        <h1 className='text-white text-2xl font-semibold'>Popular Now</h1>
        <span className='flex items-center text-base font-medium text-[#F9B546] cursor-pointer gap-2.5'>
          SEE ALL
          <ArrowNarrowRightIcon className='w-6 h-6' />
        </span>
      </div>
      <div className=''>
        {/* Movie Thumbnail */}
        <div className='relative overflow-hidden rounded-3xl'>
          <img
            src='/images/popular-1.png'
            className='w-full h-[460px]'
            alt='popular-img'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black'></div>
          {/* rating */}
          <div className='rating absolute top-[30px] right-[30px]'>
            <span className='flex items-center text-sm font-semibold text-white gap-2'>
              9.6/10 ratings
              <img src='/icons/imdb-logo.svg' alt='' />
            </span>
          </div>
          {/* Details Movie */}
          <div className='absolute bottom-[30px] left-[30px]'>
            <div className='category text-base font-medium text-white'>
              <span className='text-[#F9B546]'>Anime</span> • 12 Episodes
            </div>
            <div className='title text-2xl leading-9 w-[300px] font-semibold text-white mt-1.5 mb-[30px]'>
              Demon Slayer: Kimetsu No Yaiba (2019)
            </div>
            <div className=''>
              <div className='button-wrapper flex items-center gap-3'>
                <button
                  type='button'
                  className='flex items-center py-3 px-6 text-[#0C0B0B] font-semibold bg-[#F9B546] hover:bg-opacity-75 transition-all duration-300 rounded-xl gap-1'
                >
                  <img src='/icons/icon-play.svg' alt='' />
                  Watch Now
                </button>
                <div className='p-3 bg-[#F9B546]  bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 rounded-xl cursor-pointer'>
                  <BookmarkIcon className='w-6 h-6 text-[#F9B546]' />
                </div>
              </div>
            </div>
          </div>
          {/* Sliders */}
          <div className='absolute bottom-[30px] right-[30px]'>
            <div className='flex items-center gap-[18px]'>
              <div className='rounded-full p-2 bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 cursor-pointer'>
                <ArrowNarrowLeftIcon className='w-6 h-6 text-white ' />
              </div>
              <div className='rounded-full p-2 bg-white hover:bg-opacity-70 transition-all duration-300  cursor-pointer'>
                <ArrowNarrowRightIcon className='w-6 h-6' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
