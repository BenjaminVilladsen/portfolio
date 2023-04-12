
import React from 'react';
import AppBarLink from './AppBarLink';

import { SocialIcon } from 'react-social-icons';

const DesktopAppBar = ({refs}) => {

    return ( <div className=" fixed top-0 w-[100vw] bg-bgGray grid grid-cols-3 justify-between px-40 xl:px-60 font-semibold">
        <div className='font-bold flex flex-col justify-center items-start'>
            <AppBarLink navRef={refs.headerRef} text="BENMICVIL" scrollToId={"home"}/>
        </div>
        <div className="flex flex-row items-center justify-center gap-5">
            <AppBarLink navRef={refs.headerRef} text="Home" scrollToId={"home"}/>
            <AppBarLink navRef={refs.aboutRef} text="About" scrollToId={"about"} />
            <AppBarLink navRef={refs.projectsRef} text="Projects" scrollToId={"projects"}/>
            <AppBarLink navRef={refs.contactRef} text="Contact" scrollToId={"contact"}/>
        </div>
        <div className='font-bold flex flex-row justify-end items-center gap-2'>
            <SocialIcon className='scale-[75%] ' target="(_blank)" url='https://www.linkedin.com/in/bmvilladsen/'/>
             <SocialIcon className='scale-[75%]' bgColor='white' target="(_blank)" url='https://github.com/BenjaminVilladsen'/>
            
        </div>
        

    </div> );
}





 
export default DesktopAppBar;