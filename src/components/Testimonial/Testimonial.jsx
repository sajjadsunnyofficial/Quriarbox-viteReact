import React from 'react'
import avatar from '../../assets/avatar.png'
import quote from '../../assets/quote.png'
import { AiFillStar } from 'react-icons/Ai';

const Testimonial = () => {
    return (
        <>
            <section className='mt-[149px] mb-[266px]'>
                <div className='max-w-container mx-auto relative'>
                    <div className=''>
                        <h3 className='font-oxanium text-3xl font-bold text-primary text-center'>SERVICES</h3>
                        <h2 className='font-raleway text-[40px] font-extrabold text-[#11111D] text-center mb-[86px] mt-[11px]'>Our services for you</h2>
                    </div>
                    <div className='pt-10 pb-[34px] pr-7 pl-10 w-[872px] bg-white mx-auto rounded-[16px] shadow-monialShadow'>
                        <h2 className='font-oxanium text-[25px] font-bold leading-[120%] text-primary'>Fantastic service!</h2>
                        <p className='font-raleway text-base font-regular leading-[145%] text-[#464558] mt-[11px] mb-4 text-justify'>I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.</p>
                        <div className='flex items-center justify-between'>
                            <div className='flex'>
                                <div className='text-xl mr-1.5 text-primary'><AiFillStar /></div>
                                <div className='text-xl mr-1.5 text-primary'><AiFillStar /></div>
                                <div className='text-xl mr-1.5 text-primary'><AiFillStar /></div>
                                <div className='text-xl mr-1.5 text-primary'><AiFillStar /></div>
                                <div className='text-xl text-primary'><AiFillStar /></div>
                            </div>
                            <div className='flex items-center'>
                                <div>
                                    <h3 className='font-raleway text-base font-bold leading-[120%] text-[#222132] text-end mb-0.5'>Yves Tanguy</h3>
                                    <h5 className='font-raleway text-base font-regular leading-[120%] text-[#464558] text-end'>Chief Executive, DLF</h5>
                                </div>
                                <img className='ml-[13px]' src={avatar} alt="" />
                            </div>
                        </div>
                    </div>
                    <img className='absolute top-[-10px] left-[299px]' src={quote} alt="quotemark" />
                </div>
            </section>
        </>
    )
}

export default Testimonial