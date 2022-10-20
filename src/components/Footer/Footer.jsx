import React from 'react';
import igIcon from '../../assets/igbw.svg'
import fbIcon from '../../assets/fbbw.svg'
import waIcon from '../../assets/wabw.svg'

const Footer = () => {
  return (
    <div className='flex  flex-col text-center w-full bg-slate-900 mt-10 pt-10 pb-3'>
      <div className='columns-2'>
      <div className='w-full'>
        <a href='#home' className='text-[#cbd5e1]'>Inicio</a>
      </div>
      <div className='flex flex-wrap justify-center gap-5 w-full'>
        <a href="https://www.facebook.com/ecosommier" className='flex items-center gap-3'>
          <img 
          className='w-10'
          src={fbIcon} 
          alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/ecosommier/" className='flex items-center gap-3'>
          <img 
          className='w-10 '
          src={igIcon} 
          alt="Instagram" />
        </a>
        <a href="" className='flex items-center gap-3'>
          <img 
          className='w-11'
          src={waIcon} 
          alt="WhatsApp" />
        </a>
      </div>
      </div>
      <p className='text-[#94a3b8]'>Copyright © 2022 Eco Sommier</p>  
    </div>
  );
}

export default Footer;
