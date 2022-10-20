import React, {useState} from 'react';
import photo from '../../assets/image-1.png'
import '../NavBar/NavBar.css' 

const NavBar = () => {

  const [isOpening, setIsOpening] = useState(false);

    const Links =[
      {name: 'Home', link:'#home'},
      {name: 'Modelos', link:'#modelos'},
      {name: 'Nosotros', link:'#nosotros'},
      {name: 'Contacto', link:'#contacto'}
    ]

  return (
    <>
      <nav className='shadow-md w-full flex sticky items-center justify-center top-0 bg-white z-50'>
        <div className='container md:flex py-4 md:px-10 px-7 items-center justify-between max-w-screen-xl'>
          <div className='w-full md:flex relative flex items-center'>
          <a href='#home' className='items-center flex gap-4 font-bold text-2x1 cursor-pointer text-gray-800'>
            <img className='w-16 ' src={photo} alt="image" />
            <span className='text-3x1 mr-1 pt-2 text-[#213650] text-lg'>Eco Sommier</span>
          </a>
          </div>

          <div onClick={() => setIsOpening(!isOpening)} className='text-3x1 absolute right-8 top-6 cursor-pointer md:hidden '>
            <ion-icon size='large' name="menu-outline"></ion-icon>
          </div>

          <ul className={`md:flex md:items-center md:pb-0 pb-2 absolute md:static bg-white shadow-lg md:shadow-none md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpening ? 'top-20 ':'top-[-490px]'}`}>
            {
              Links.map((link)=>(
                <li key={link.name} className={`md:ml-8 text-lg text-x2 md:my-0 my-6 transition ${ isOpening ? 'delay-700 duration-500 translate-x-2' : '-translate-x-2'}`}>
                  <a href={link.link} className='text-gray-800  hover:gray-400 duration-500'>{link.name}</a>
                </li>
              ))
            }
          </ul>  
        </div>
      </nav>
    </>
  );
}

export default NavBar;
