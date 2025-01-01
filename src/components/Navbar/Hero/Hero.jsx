import React from 'react';
import Headphone1 from "../../../assets/icons/Headphone1.png";
import Headphone2 from "../../../assets/icons/Headphone2.png";
import Headphone3 from "../../../assets/icons/Headphone3.png";
import { FaWhatsapp } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import { AnimatePresence,easeInOut } from "framer-motion";
import {motion} from "framer-motion";


const fadeUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.5
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: easeInOut,
            },
        },
        exit: {
            opacity: 0,
            y: 50,
            scale: 0.5,
            transition: {
                duration: 0.2,
                ease: easeInOut,

            },
        },
    };
};

const headphoneData = [
    {
        id: 1,
        image: Headphone1,
        title: "Headphones Wireless ",
        subtitle: "Experience the freedom of truly wireless sound with our top-of-the-line headphones! Designed for comfort and superior sound quality, these headphones offer crystal-clear audio, powerful bass, and an impressive battery life. ",
        price: "$100",
        modal: "model white",
        bgColor: "rgb(209 213 219)",
    },
    {
        id: 2,
        image: Headphone2,
        title: "Headphones Wireless 2",
        subtitle: "Experience the freedom of truly wireless sound with our top-of-the-line headphones! Designed for comfort and superior sound quality, these headphones offer crystal-clear audio, powerful bass, and an impressive battery life. ",
        price: "$100",
        modal: "model Black",
        bgColor: "rgb(0 0 0)",
    },
    {
        id: 3,
        image: Headphone3,
        title: "Headphones Wireless 3",
        subtitle: "Experience the freedom of truly wireless sound with our top-of-the-line headphones! Designed for comfort and superior sound quality, these headphones offer crystal-clear audio, powerful bass, and an impressive battery life.",
        price: "$100",
        modal: "model purple",
        bgColor: "rgb(79 70 229)",
    },
];

const Hero = () => {
    const [activeData, setActiveData] = React.useState
        (headphoneData[0]);

    /*------ this is a function to switch headphones---- */
    const handleActiveData = (data) => {
        setActiveData(data);
    };

    return (
        <section className='bg-brandDark text-white font-varela'>
            <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[700px]'>

                {/*Headphone Info */}
                <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]'>
                    <div className='space-y-5 text-center md:text-left'>
                        <AnimatePresence mode="wait"> {/* this updatefollower is for when u hover the title to make the title to be bolder */}
                            <UpdateFollower
                                mouseOptions={{
                                    backgroundColor: "white",
                                    zIndex: 9999,
                                    followSpeed: 0.5,
                                    rotate: -720,
                                    mixBlendMode: "difference",
                                    scale: 10,
                                }}
                            > {/* this motion is for when u refresh the page to make the title to have motion */}
                                <motion.h1
                                    key={activeData.id}
                                    variants = {fadeUp(0.2)}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                    className='text-3xl lg:text-6xl font-bold font-varela'
                                >
                                    {activeData.title}
                                </motion.h1>

                            </UpdateFollower>
                        </AnimatePresence>

                        <AnimatePresence mode='wait'>
                            <motion.p
                                key={activeData.id}
                                variants = {fadeUp(0.3)}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                className='text-sm leading-loose text-white/80'
                            >
                                {activeData.subtitle}
                            </motion.p>

                        </AnimatePresence>




                        <AnimatePresence mode='wait'>
                            <UpdateFollower
                              mouseOptions={{
                                backgroundColor: activeData.bgColor,
                                zIndex: 9999,
                                followSpeed: 0.5,
                                rotate: -720,
                                scale:6,
                               backgroundElement:(
                                <div className='bg-cover'>
                                    <img 
                                    style={{
                                        backgroundSize:"cover"
                                    }}
                                    src={activeData.image} />
                                </div>
                               )
                            }}>
                                <motion.button
                                    key={activeData.id}
                                    variants = {fadeUp(0.3)}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                    style={{ backgroundColor: activeData.bgColor }}
                                    className='px-4 py-2 text-rose-500 inline-block font-normal rounded-sm'>
                                    Buy and Listen
                                </motion.button>

                            </UpdateFollower>

                        </AnimatePresence>




                        { /*------ Headphone list separator---- */}
                        <div className='flex items-center justify-center md:justify-start gap-4 !mt-24'>
                            <div className='w-20 h-[1px] bg-white'></div>
                            <p className='uppercase text-sm'> Top Headphones for you</p>
                            <div className='w-20 h-[1px] bg-white'>

                            </div>
                        </div>
                        { /*------ Headphone list switcher---- */}
                        <div className='grid grid-cols-3 gap-10'>
                            {headphoneData.map((item) => {
                                return (
                                    <UpdateFollower
                                    mouseOptions={{
                                        backgroundColor: activeData.bgColor,
                                        zIndex: 9999,
                                        followSpeed: 0.5,
                
                                        scale:5,
                                        text: "View Details",
                                        textFontSize:"3px",
                                        textColor:"red",
                                        }}>
                                        <div  /*------ this key is a function to switch headphones---- */
                                        key={item.id}
                                        onClick={() => handleActiveData(item)}
                                        className='grid grid-cols-2 place-items-center cursor-pointer'>
                                        <div>
                                            <img src={item.image} alt='' className='w-[200px]' />
                                        </div>
                                        <div className='space-y-2'>
                                            <p className='text-base font-bold'>{item.price}</p>
                                            <p className='text-xs font-normal text-nowrap'>{item.modal}</p>
                                        </div>

                                    </div>

                                    </UpdateFollower>
                                    
                                );
                            })}
                        </div>
                    </div>
                </div>
                {/*-----Hero Image---- */}
                <div className='flex flex-col justify-end items-center'>

                    <motion.img
                     key={activeData.id}
                     initial={{ opacity:0, scale:0.9, y:100}}
                     animate={{ opacity:1, scale:1, y:0}}
                     transition={{duration:0.4, delay:0.2,
                        ease:easeInOut}}
                     
                     exit={{ opacity:0, scale:0.9, y:100,
                        transition:{
                            duration:0.2,
                        },
                     }}
                     src={activeData.image} alt='' className='w-[300px] md:-[400px] xl:w-[550px]' />
                </div>

                {/*----whatsApp-icon--- */}
                <div>
                    <a href=''>
                        <FaWhatsapp className='text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference' />

                    </a>
                </div>

            </div>

        </section>
    )
}

export default Hero