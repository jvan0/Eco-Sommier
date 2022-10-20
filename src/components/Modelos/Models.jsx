import React from 'react'
import Carousel from './Carousel'

export const Models = () => {
  return (
    <div className='flex w-full justify-center flex-col mt-10' id='modelos'>
      <h3 className='text-center'>Modelos</h3>
      <hr className='mx-500px'/>
      <Carousel />
    </div>
  )
}
