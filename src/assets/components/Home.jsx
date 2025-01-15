import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';

export default function Home() {
  return (
    <div className='flex flex-row justify-center space-x-10 bg-#f4796c'>
      <div className='flex flex-row w-1/2'>
        
        <h1 className="text-3xl italic">
          Festies
        </h1>
          
      </div>
      <div className='flex flex-row justify-center space-x-10'>
        <Navbar />
        <DehazeRoundedIcon /> 
      </div>
    </div>
  
  )
}
