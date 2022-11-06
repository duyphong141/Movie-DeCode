import React from 'react'
import './customCss.css'
export default function CustomCss() {
  return (
    <div className='container mt-1'>
        <article className='bg-gray-500 p-5 shadow-lg'>
            <p className='text-2xl text-white'>Responsive</p>

            <p className='content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, rerum placeat tempore praesentium est voluptate, quos libero facere eos aperiam repellendus quam iure nulla dolor porro, nihil eveniet blanditiis? Beatae doloremque quae porro labore similique reprehenderit velit cupiditate quod facilis nam. Soluta, temporibus. Ducimus soluta et impedit vitae officiis deleniti.</p>

            <button className='p-5 animation-scale'>Hover me</button>
        </article>
    </div>
  )
}
