import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
    return (
        <div className='mt-20'>
            <div className="text-center">
                <h1 className='text-3xl font-bold mb-2'>
                    AyanSamanta
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full align-baseline ml-1"></span>
                </h1>

                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
                    ayansamanta802@gmail.com
                </div>
            </div>
            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>© 2026 Ayan Samanta. All rights reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target='_blank' href="https://github.com/ayansamanta2004">GitHub</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/ayan-samanta-555922280/">LinkedIn</a></li>
                    <li><a target='_blank' href="https://x.com/Ayan_Samanta03">Twitter</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer