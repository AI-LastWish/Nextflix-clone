import React, { SVGProps } from 'react'

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  title: string
}

const HeaderItem = ({ Icon, title }: Props) => {
  return (
    <div className='flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white'>
      <Icon className='h-8 mb-1 group-hover:animate-bounce' />
      <p className='opacity-0 group-hover:opacity-100 tracking-widest'>title</p>
    </div>
  )
}

export default HeaderItem