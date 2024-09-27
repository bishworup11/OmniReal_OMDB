import React, { Children } from 'react'

export default function Box({Children}) {
    const [isOpen, setIsOpen] = React.useState(true);
    console.log("this is isOpen box");
  return (
    <div className=' relative w-2/5  h-[45rem] bg-neutral-700 w-12 flex justify-center items-center rounded-lg'>
        <button
        className='absulte top-3 right-3 h-10 aspect-auto rounded-full border-0 bg-stone-950 text-2xl font-bold text-white cursor-pointer z-50'
        onClick={() => setIsOpen(!isOpen)}
        >
        {isOpen ? 'Close' : 'Open'}
        </button>

        {isOpen && Children}
        
      
    </div>
  )
}
