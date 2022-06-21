import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header>
      <div>This is the header</div>
      <Image 
        className='object-contain' 
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" 
        width={200} 
        height={100} 
      />
    </header>
  )
}

export default Header