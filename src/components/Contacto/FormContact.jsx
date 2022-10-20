import React from 'react'
import igIcon from '../../assets/instagram.png'
import fbIcon from '../../assets/facebook.png'
import waIcon from '../../assets/whatsapp.png'

export const FormContact = () => {
  return (
    <div className='flex justify-center mt-10'>
      <div className='flex flex-wrap justify-center gap-5 max-w-screen-xl w-full'>
        <a href="https://www.facebook.com/ecosommier" className='flex items-center gap-3'> 
          <p>Facebook</p>
          <img 
          className='w-8'
          src={fbIcon} 
          alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/ecosommier/" className='flex items-center gap-3'>
        <p>Instagram</p>
          <img 
          className='w-8'
          src={igIcon} 
          alt="Instagram" />
        </a>
        <a href="" className='flex items-center gap-3'>
          <p>WhatsApp</p>
          <img 
          className='w-8'
          src={waIcon} 
          alt="WhatsApp" />
        </a>
      </div>
    </div>
  )
}
