import React from 'react'
import CardSocial from './utils/CardSocial'

const Contact = () => {
  return (
    <div className='h-screen  flex flex-col justify-between items-center py-20 md:py-32 lg:py-40'>
        <div className="flex">
            <h1 className="text-xl font-bold text-center "><span>Contact</span> Me!</h1>
        </div>
      <div className="flex justify-center items-center">
        <CardSocial/>
      </div>
    </div>
  )
}

export default Contact
