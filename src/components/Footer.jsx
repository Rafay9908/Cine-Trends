import React from 'react'
import fbLogo from '../assets/fb-logo.svg'
import instaLogo from '../assets/insta-logo.svg'
import twitterLogo from '../assets/twitter-logo.svg'
import ytLogo from '../assets/yt-logo.svg'

function Footer() {
  return (
    <div className='flex flex-col items-center gap-20 lg:gap-9 my-16'>
        <div className='flex flex-row justify-center items-center gap-12'>
            <a href="#"><img src={fbLogo} alt="social media logo" /></a>
            <a href="#"><img src={instaLogo} alt="social media logo" /></a>
            <a href="#"><img src={twitterLogo} alt="social media logo" /></a>
            <a href="#"><img src={ytLogo} alt="social media logo" /></a>
        </div>
        <div className='flex flex-col text-center lg:text-start lg:flex-row text-lg font-bold gap-12 text-[#111827]'>
            <a href="">Conditions of Use</a>
            <a href="">Privacy & Policy</a>
            <a href="">Press Room</a>
        </div>
        <p className='text-[#6B7280] text-lg font-bold lg:text-left text-center'>© 2021 MovieBox by Adriana Eka Prayudha</p>
    </div>
  )
}

export default Footer