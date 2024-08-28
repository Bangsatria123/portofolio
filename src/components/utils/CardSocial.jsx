import React from 'react'
import "animate.css"
import { EnvelopeSimple, FacebookLogo, GithubLogo, InstagramLogo, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'



const CardSocial = () => {
  return (
    <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 mb-16 justify-center items-center overflow-hidden '>

        <div className="bg-opacity-5 h-[5em] w-[10em] flex justify-center items-center animate__animated animate__fadeInLeft animate__delay-1s q rounded-xl duration-1000 p-[6px] bg-white hover:bg-opacity-[0.4] hover:text-slate-900 border border-slate-500 border-opacity-[0.3] hover:border-none">
            <div className='animate__animated animate__fadeInLeft animate__delay-1s w'>
                <a className='text-base md:text-lg lg:text-lg font-bold flex justify-center items-center'>Github <GithubLogo size={32} weight="bold" className=''/></a>
            </div>
        </div>
        <div className="bg-opacity-5 h-[5em] w-[10em] flex justify-center items-center animate__animated animate__fadeInUp animate__delay-1s q rounded-xl duration-1000 p-[6px] bg-white hover:bg-opacity-[0.4] hover:text-slate-900 border border-slate-500 border-opacity-[0.3] hover:border-none">
            <div className='animate__animated animate__fadeInUp animate__delay-1s w'>
                <a className='text-base md:text-lg lg:text-lg font-bold flex justify-center items-center'>Facebook<FacebookLogo size={32} weight="bold" className=''/></a>
            </div>
        </div>
        <div className="bg-opacity-5 h-[5em] w-[10em] flex justify-center items-center animate__animated animate__fadeIn animate__delay-1s q rounded-xl duration-1000 p-[6px] bg-white hover:bg-opacity-[0.4] hover:text-slate-900 border border-slate-500 border-opacity-[0.3] hover:border-none">
            <div className='animate__animated animate__fadeIn animate__delay-1s w'>
                <a className='text-base md:text-lg lg:text-lg font-bold flex justify-center items-center'>Instagram <InstagramLogo size={32} weight="bold" className=''/></a>
            </div>
        </div>
        <div className="bg-opacity-5 h-[5em] w-[10em] flex justify-center items-center animate__animated animate__fadeInDown animate__delay-1s q rounded-xl duration-1000 p-[6px] bg-white hover:bg-opacity-[0.4] hover:text-slate-900 border border-slate-500 border-opacity-[0.3] hover:border-none">
            <div className='animate__animated animate__fadeInDown animate__delay-1s w'>
                <a className='text-base md:text-lg lg:text-lg font-bold flex justify-center items-center'>E-Mail <EnvelopeSimple size={32} weight="bold" className=''/></a>
            </div>
        </div>
        <div className="bg-opacity-5 h-[5em] w-[10em] flex justify-center items-center animate__animated animate__fadeInRight animate__delay-1s q rounded-xl duration-1000 p-[6px] bg-white hover:bg-opacity-[0.4] hover:text-slate-900 border border-slate-500 border-opacity-[0.3] hover:border-none">
            <div className='animate__animated animate__fadeInRight animate__delay-1s w'>
                <a className='text-base md:text-lg lg:text-lg font-bold flex justify-center items-center'>Whatsapp <WhatsappLogo size={32} weight="bold" className=''/></a>
            </div>
        </div>
        
    </div>
  )
}

export default CardSocial
