import React from 'react'

export default function Card() {
    return (
        <div className='card'>
            <div className="card-content bg-gray-200 py-8 rounded-tl-lg rounded-tr-lg px-7">
                <h3 className='text-purple-800 font-bold text-xs'>Category</h3>
                <p className='text-xl'>Cybersoft frontend developer</p>
                <p className='text-xl font-thin my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quibusdam voluptatem illo ipsa quos neque voluptas consequuntur qui praesentium, alias quis earum, delectus quidem, porro non eveniet autem expedita amet.</p>
            </div>

            <div className="card-footer rounded-bl-lg rounded-br-lg flex justify-between px-2 bg-gray-500">
                <p className='m-4'>1 USD</p>
                <button className='rounded-lg bg-purple-500 text-white hover:text-purple-500 hover:bg-gray-300 p-2 my-2 transition duration-500'>Register</button>
            </div>
        </div>
    )
}
