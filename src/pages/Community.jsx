import React from 'react'
import Video2 from '../assets/video/22.mp4'
import Card from '../components/Card';
import Card2 from '../components/Card2';
import '../Styles/style.css';

const community = () => {
  return (
    <div className='container'>
      <video src={Video2} autoPlay loop muted></video>
      <div className="inner-text">
        <Card />
      </div>
      <div className="outter-text">
        <Card2 />
      </div>
    </div>
  )
}

export default community