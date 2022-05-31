import React from 'react'
import Video2 from '../assets/video/22.mp4'
import '../Styles/style.css';

const community = () => {
  return (
    <div className='container'>
      <video src={Video2} autoPlay loop muted></video>
    </div>
  )
}

export default community