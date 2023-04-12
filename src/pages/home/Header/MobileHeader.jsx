
import React, { useRef } from 'react';

import { useScroll, useTransform, motion } from "framer-motion";

const MobileHeader = () => {

    

    return ( 
        <div>
        <motion.div

        
        className="w-[100vw] h-[100vh]   bg-black pb-[10vh]" >
            <div className="w-full h-full flex flex-col justify-center items-center pt-14 px-5">
            
            
            <h1 className="text-5xl
                md:text-6xl
                lg:text-7xl font-semibold pt-0 mt-0 bg-gradient-to-r text-textGray">Benjamin</h1>
            <h1 className="text-xl sm:text-2xl font-semibold pt-2 mb-0
            bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent font-mono
            ">- Software Student -</h1>
             
            </div>

        </motion.div>
        </div>
     );
}
 
export default MobileHeader;