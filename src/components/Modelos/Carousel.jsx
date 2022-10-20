import React, {useState} from 'react';
import modeloEcosommier from '../../assets/modelo-ecosommier.jpg'
import description from '../../assets/adriatico-descripcion.png'
import financiacion from '../../assets/facebook.png'

function Carousel (){
  const images = [modeloEcosommier, description, financiacion]
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImg, setSelectedImg]= useState(images[0])

  const selectNewImg = (index, image, next = true) =>{
    const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0
    const nextIndex =  next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1

    setSelectedImg(images[nextIndex])
    setSelectedIndex(nextIndex)
  }

  const previous = ()=> {
    selectNewImg(selectedIndex, images, false)
  }

  const next = () =>{
    selectNewImg(selectedIndex, images)
  }


  return (
    <div className='flex justify-center w-max-xl mt-10 z-0 '>
    <div className='flex justify-center flex-col relative'>
      <img src={selectedImg} alt="Colchon" className='md:max-w-xl max-w-xs flex justify-center rounded-lg'/>
      <div className='flex justify-center flex-row gap-8 absolute left-0 right-0 -bottom-6'>
        <button onClick={previous} className='px-5 py-3 rounded-full bg-[#ef8321] text-[#333]'>{'<'}</button>
        <button onClick={next} className='px-5 py-3 rounded-full bg-[#ef8321] text-[#333]'>{'>'}</button>
      </div>
      </div>
    </div>
  );
}

export default Carousel;
