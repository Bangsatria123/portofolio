import React from 'react'
import Frontend from './utils/Frontend'
import Backend from './utils/Backend'

const Skill = () => {
  return (
    <div className='flex flex-col h-screen w-full justify-center items-center'>
      <div className=" flex justify-center items-center">
          <h1 className="text-3xl"><span>My</span> Skills <span>:</span></h1>
      </div>
      <div className="flex justify-center items-center mt-12 gap-16">
        <Frontend/>
        <Backend/>
      </div>
    </div>
  )
}

export default Skill
