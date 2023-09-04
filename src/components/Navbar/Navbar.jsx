import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
    const [isSearchVisible, setIsSearchVisible] = useState(false)
    const searchBtn = () => {
        setIsSearchVisible(!isSearchVisible)
    }
    return (
        <>
            <nav className='pt-[15px] pb-4 shadow-navShadow fixed w-full z-10'>
                <div className='max-w-container mx-auto flex items-center'>
                    <a href="#"><img src={logo} alt="logo" /></a>
                    <div className='ml-auto'>
                        <div className='flex items-center'>
                            <ul className='flex '>
                                <li><a className='font-raleway text-base font-extrabold text-[#817382] mr-12 hover:text-primary duration-300' href="#">Home</a></li>
                                <li><a className='font-raleway text-base font-extrabold text-[#817382] mr-12 hover:text-primary duration-300' href="#">Our services</a></li>
                                <li><a className='font-raleway text-base font-extrabold text-[#817382] mr-12 hover:text-primary duration-300' href="#">About Us</a></li>
                                <li><a className='font-raleway text-base font-extrabold text-[#817382] mr-12 hover:text-primary duration-300' href="#">What’s new?</a></li>
                            </ul>
                            <div className='flex'>
                                {isSearchVisible && (
                                    <input className='focus:outline-none border-2 border-[#FFEDC9] pl-3.5 font-raleway text-base font-bold text-[#817382]' type="text" placeholder='Search' />
                                )
                                }
                                <button onClick={searchBtn} className='search pt-[13px] pr-[13px] pb-3.5 pl-3.5 rounded-md bg-[#FFEDC9] mr-[9px] hover:bg-primary duration-500 ease-liner'>
                                    {
                                        isSearchVisible ? <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <path d="M20.8921 3.32357C21.504 2.71172 21.504 1.71971 20.8921 1.10786V1.10786C20.2803 0.496005 19.2883 0.496004 18.6764 1.10786L11 8.78429L3.32357 1.10786C2.71172 0.496005 1.71971 0.496005 1.10786 1.10786V1.10786C0.496005 1.71971 0.496004 2.71172 1.10786 3.32357L8.78429 11L1.10786 18.6764C0.496005 19.2883 0.496005 20.2803 1.10786 20.8921V20.8921C1.71971 21.504 2.71172 21.504 3.32357 20.8921L11 13.2157L18.6764 20.8921C19.2883 21.504 20.2803 21.504 20.8921 20.8921V20.8921C21.504 20.2803 21.504 19.2883 20.8921 18.6764L13.2157 11L20.8921 3.32357Z" fill="#FFAF0F" />
                                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7576 14.1883L21.6753 20.1062C21.8833 20.3143 22.0001 20.5966 22 20.8909C21.9999 21.1851 21.8829 21.4673 21.6748 21.6753C21.4666 21.8833 21.1844 22.0001 20.8901 22C20.5958 21.9999 20.3137 21.8829 20.1057 21.6747L14.188 15.7569C12.4189 17.1271 10.1943 17.7719 7.96679 17.5601C5.73922 17.3483 3.676 16.2959 2.19685 14.6169C0.717691 12.9379 -0.0662885 10.7584 0.00439575 8.52184C0.07508 6.28529 0.995118 4.15967 2.57734 2.57741C4.15957 0.995143 6.28513 0.0750819 8.52162 0.00439586C10.7581 -0.0662901 12.9375 0.717709 14.6165 2.1969C16.2955 3.67609 17.3479 5.73937 17.5597 7.96699C17.7715 10.1946 17.1267 12.4192 15.7565 14.1883H15.7576ZM8.80041 15.3994C10.5508 15.3994 12.2294 14.704 13.4671 13.4663C14.7048 12.2286 15.4001 10.5499 15.4001 8.79953C15.4001 7.04914 14.7048 5.37044 13.4671 4.13272C12.2294 2.89501 10.5508 2.19967 8.80041 2.19967C7.05006 2.19967 5.3714 2.89501 4.13372 4.13272C2.89604 5.37044 2.20072 7.04914 2.20072 8.79953C2.20072 10.5499 2.89604 12.2286 4.13372 13.4663C5.3714 14.704 7.05006 15.3994 8.80041 15.3994Z" fill="#FFAF0F" />
                                        </svg>
                                    }
                                </button>



                                <button className='px-5 py-3 bg-[#FFE4D9] rounded-[5px] font-oxanium text-xl font-bold text-primary hover:text-white hover:bg-primary duration-500 ease-liner'>
                                    Contact us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar