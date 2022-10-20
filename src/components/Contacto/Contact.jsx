import React from 'react';
import { FormContact } from './FormContact'

export const Contact = () => {
  return (
    <div className='flex justify-center flex-col mt-10' id='contacto'>
      <h3 className='text-center'>Contacto</h3>
      <hr />
      <FormContact />
    </div>
  );
}

