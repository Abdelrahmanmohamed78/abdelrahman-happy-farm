import Link from 'next/link'
import { ReactNode } from 'react'

function PageHeader({ children }: {children: ReactNode}) {
  return (
    <div className='main-container mb-15'>
      <h3 className='text-[40px] text-second-bg mb-5 font-bold'>{children}</h3>
      <p className='flex gap-2.5 items-center text-hover-color font-semibold'>
        <Link href={"/"}>Home</Link>
        <span>/</span>
        <span className='text-main-color'>{children}</span>
      </p>
    </div>
  )
}

export default PageHeader