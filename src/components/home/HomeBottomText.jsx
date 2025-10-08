import React from 'react'
import { Link } from 'react-router-dom'

function HomeBottomText() {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 '>
      <p className='absolute lg:w-[30vw] right-0 lg:right-20 bottom-25 lg:bottom-32 text-xs font-[font1] lg:leading-relaxed leading-tight'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.
      </p>
      <div className='lg:h-25 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center border-3 border-white rounded-full px-14 uppercase'>
        <Link className='text-[5vw] mt-3' to='/projects'>Projets</Link>
      </div>
      <div className='lg:h-25 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center border-3 border-white rounded-full px-14 uppercase'>
        <Link className='text-[5vw] mt-3' to='/agence'>agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
