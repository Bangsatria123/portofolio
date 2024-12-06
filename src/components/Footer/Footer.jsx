import React from 'react'

const Footer = () => {
  return (
    <div className=' p-10 bg-slate-700 h-[20vh] text-[#dddd]'>
        <div className="flex justify-center md:justify-center lg:justify-start mb-2">
            <h1 className="text-2xl text-center">
                Dimas <span>Satria</span>
            </h1>
        </div>
        <div className="flex justify-center md:justify-center lg:justify-end">
            <h1 className="text-xl text-center">
            <span>&copy;</span> 2024 Dimas <span>Satria</span>. All rights reserved.
            </h1>
        </div>
    </div>
  )
}

export default Footer
