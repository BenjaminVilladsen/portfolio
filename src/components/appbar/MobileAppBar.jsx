
import React from 'react';
import AppBarLink from './AppBarLink';

import { useState } from 'react';

//import framer motion
import { motion } from 'framer-motion';


//import react icons burger menu
import {GiHamburgerMenu} from 'react-icons/gi'

//import "x" icon
import {IoClose} from 'react-icons/io5'

const MobileAppBar = ({refs}) => {


    let [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    }

    

    return ( 
        <>
        <div className=" shadow-lg lg:hidden fixed top-0 w-[100vw] py-3 bg-bgGray grid grid-cols-2 px-5 sm:px-20 justify-between">
            <div className='flex flex-col justify-center items-start text-bgLight font-bold'>
                <AppBarLink navRef={refs.headerRef} text="BENMICVIL"/>
            </div>
            <div className='flex flex-col justify-center items-end text-bgLight '>
                <GiHamburgerMenu size={20} onClick={toggleOpen}/>
            </div>
        </div>
        <motion.div
            style={{
                opacity: open ? 1 : 0,
                pointerEvents: open ? "auto" : "none"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: open?1:0 }}
            >
            <OpenAppBar refs={refs} toggleOpen={toggleOpen}/>
        </motion.div>
        </>
    );
}



const OpenAppBar = ({refs, toggleOpen}) => {

    return ( 
        <div className=" w-[100vw] h-[100vh] fixed top-0 bg-bgLight ">
            <div className='grid grid-cols-2 px-5 sm:px-20 justify-between py-3'>
                <div className='flex flex-col justify-center items-start text-bgDark font-bold'>
                    <div onClick={toggleOpen}>
                        <AppBarLink navRef={refs.headerRef} text="BENMICVIL"/>
                    </div>
                        
                </div>
                <div className='flex flex-col justify-center items-end text-bgDark cursor-pointer '>
                    <IoClose size={25} onClick={toggleOpen}/>
                </div>
            </div>
            <div className=' w-full h-full flex flex-col justify-center items-center text-bgDark font-bold gap-8 text-4xl pb-20'>
                <div onClick={toggleOpen}>
                    <AppBarLink navRef={refs.headerRef} text="Home"/>
                </div>
                <div onClick={toggleOpen}>
                    <AppBarLink navRef={refs.aboutRef} text="About"/>
                </div>
                <div onClick={toggleOpen}>
                    <AppBarLink navRef={refs.projectsRef} text="Projects"/>
                </div>
                <div onClick={toggleOpen}>
                    <AppBarLink navRef={refs.contactRef} text="Contact"/>
                </div>
                
                
                
            </div>

        </div>
    );
}

 
export default MobileAppBar;