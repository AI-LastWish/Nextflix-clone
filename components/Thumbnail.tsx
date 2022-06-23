import Image from 'next/image'
import React, { forwardRef } from 'react'

// @ts-ignore
const Thumbnail = forwardRef(({ result }) => {
  const BASE_URL = '/images/'
  return (
    <div 
      className='p-2 group cursor-pointer transition duration-200 
      ease-in transform sm:hover:scale-105 hover:z-50'>
      <Image
        layout='responsive'
        src={`${BASE_URL}${result.episode_id}.jpeg`}
        height={1080}
        width={1920}
      />

      <div className='p-2'>
        <p className='truncate max-w-md'>{result.opening_crawl}</p>
        <h2 className='mt-1 text-2xl text-white transition-all 
          duration-100 ease-in-out group-hover:font-bold'>{result.title}</h2>
        <p className='flex items-center opacity-0 group-hover:opacity-100'>
          {result.director}{" "}
          {result.producer}{" "}
          {result.release_date}
        </p>
      </div>
    </div>
  )
})
Thumbnail.displayName = 'Thumbnail';
export default Thumbnail