import React from 'react'
import Video from './Video'

function HomeHeroText() {
  return (
    <div className='font-[font1] mt-22 lg:mt-0 pt-5 text-center'>
        <div className='lg:text-[9.5vw] text-[12vw] flex items-center justify-center uppercase lg:leading-[8vw] leading-[10vw]'> 
          L'étincelle
        </div>
        <div className='lg:text-[9.5vw] text-[12vw] flex items-start justify-center uppercase lg:leading-[8vw] leading-[10vw]'>
          qui 
          <div className='h-[8vw] w-[16vw] overflow-hidden rounded-full -mt-1'>
                    <Video />
          </div>
          génère
        </div>
        <div className='lg:text-[9.5vw] text-[12vw] flex items-center justify-center uppercase lg:leading-[8vw] leading-[10vw]'>
          la créativité
          </div>
    </div>
  )
}

export default HomeHeroText
