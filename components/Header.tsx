import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'
import {
  HomeIcon
} from '@heroicons/react/outline'

const Header = () => {
  return (
    <header>
      <div>
        <HeaderItem title='HOME' Icon={HomeIcon} />
      </div>
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