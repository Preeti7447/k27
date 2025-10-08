import React from 'react'

function Video() {
  return (
    <div className='h-full w-full'>
        <video className='h-full w-full object-cover overflow-hidden rounded' autoPlay loop muted src="/videos/video-k27.mp4"></video>
    </div>
  )
}

export default Video
