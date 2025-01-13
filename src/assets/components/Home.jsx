import React from 'react'
import SearchBar from './SearchBar'
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
        <SearchBar />
        <DehazeRoundedIcon /> 
      </div>
    </div>
  
  )
}
