import React from 'react';
import SideBar from '../Parts/Authenticated/SideBar';
import TopBar from '../Parts/TopBar';

export default function LandingPages() {
  return (
    <>
      <div className='mx-auto max-w-screen-[1440px]'>
        <SideBar />
        <div className='ml-[300px] px-8'>
          <div className='flex flex-col gap-[52px] py-5'>
            <TopBar />
          </div>
        </div>
      </div>
    </>
  );
}
