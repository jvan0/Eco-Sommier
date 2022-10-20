import React from 'react';
import photo1 from '../../assets/modelo-ecosommier.jpg'
import ContactButton from './ContactButton';

export const Home = () => {
  return (
    <div className=' flex justify-center mt-7 px-4'id='home'>
    <div className='max-w-screen-xl w-full mt-5 grid grid-cols-2 gap-4' >
      <div className='flex justify-center flex-col gap-2 items-center'>
      <h1 className='md:text-3xl text-2xl font-nato_serif font-bold'>Eco Sommier</h1>
      <p className='text-xs md:text-base font-poppins' >La traquilidad de dormir, la tranquilidad de comprar.</p>
      <ContactButton />
      </div>
      <div className='flex justify-center'>
        <img 
        className='md:w-80 md:h-80 w-xs h-xs flex border-x rounded-xl'
        src={photo1} 
        alt="model-image" />
      </div>
    </div>
    </div>
  )
}
