import React, { useState } from 'react'

export default function Navbar({movies}) {
    const [search, setSearch] = useState("");
  return (
    <nav className="flex flex-col gap-5 md:flex-row justify-between items-center p-4 bg-indigo-600 text-white">
        <div className='flex flex-row justify-between items-center '>
         <span className='text-4xl'> 🎬🍿📺</span>
         <h1 className='text-2xl font-bold p-1 ml-1'>OMNIREEL</h1>
        </div>

        <input 
         className='w-96 p-2 rounded-md border-2 border-gray-200 text-xl text-black focus:outline-none  focus:border-indigo-500 focus:scale-110 duration-200'
         type="text"
         placeholder="Search for movies, TV shows..." 
         value={search}
         onChange={(e) => setSearch(e.target.value)}
        
        />
        <p className='text-xl'>
            Found <strong>{movies.length}</strong> results
        </p>
      
    </nav>
  )
}
