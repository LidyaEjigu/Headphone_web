import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { FaMapLocation } from "react-icons/fa6"
import { FaFacebook, FaInstagram, FaGoogle, FaTelegram } from "react-icons/fa"

const Footor = () => {
    return (
        <footer className='bg-primary pt-12 pb-8 text-white'  >
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {/* company details section */}
                    <div className='space-y-6'>
                        <h1 className='text-3xl font-bold uppercase'>
                            Playing
                        </h1>
                        <p className='text-sm max-w-[300px]'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A enim dolores amet et voluptates dolore. Laboriosam tenetur officiis voluptates rem accusamus? Assumenda, tempora ullam soluta voluptate nesciunt expedita consequatur debitis!
                        </p>
                        <div>
                            <p className='flex items-center gap-2'>
                                <FaPhone /> +2519-23-23-23-23

                            </p>
                            <p className='flex items-center gap-2 mt-2'>

                                <FaMapLocation /> Noida, Uttar Pradesh
                            </p>

                        </div>
                    </div>

                    {/* Footor Links section */}
                    <div className='space-y-6'>
                        <h1 className='text-3xl font-bold'>
                            Quick Links
                        </h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                            <div>
                                <ul className='space-y-2'>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact us</li>
                                    <li> Privacy Policy</li>
                                </ul>

                            </div>
                            <div>
                                <ul className='space-y-2'>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact us</li>
                                    <li> Privacy Policy</li>
                                </ul>

                            </div>
                        </div>


                    </div>

                    {/* Social Links section */}
                    <div className='space-y-6'>
                        <h1 className='text-3xl font-bold'>Follow Us</h1>
                        <div className='flex items-center gap-3'>
                            <FaFacebook className=" text-3xl hover:scale-105 duration-300" />
                            <FaInstagram className=" text-3xl hover:scale-105 duration-300" />
                            <FaTelegram className=" text-3xl hover:scale-105 duration-300" />
                            <FaGoogle className=" text-3xl hover:scale-105 duration-300" />



                        </div>

                    </div>







                </div>
                {/* copyright section */}
                <p className='text-white text-center mt-8 border-t-2 pt-8'>
                    2024. All Rights Reserved || The Coding Journey
                </p>

            </div>

        </footer>
    )
}

export default Footor
