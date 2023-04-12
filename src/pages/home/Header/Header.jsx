import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Header = () => {
    
    const headerMainRef = useRef(null);
    const textContainerRef = useRef(null);

    //based on the scroll position of the header, change the opacity of the text
    const { scrollYProgress } = useScroll({target: headerMainRef});

    let titleScale = useTransform(scrollYProgress, [0, 1], [1, 2]);
    let titleOpacity = useTransform(scrollYProgress, [.6, .9], [1, 0]);
    let nameScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    let nameOpacity = useTransform(scrollYProgress, [.6, 1], [1, 0]);

    //new
    let newTitleScale = useTransform(scrollYProgress, [.4, 1], [1, 1.3]);
    let newTitleOpacity = useTransform(scrollYProgress, [.5, .8], [0, 1]);
    let newNameScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
    let newNameOpacity = useTransform(scrollYProgress, [0, .5], [1, 0]);


    //colors:
    // dark blue: rgba(0, 8, 38,1)
    //black: rgba(22, 22, 23,1)
    let bgGradient = useTransform(scrollYProgress, [0, 1], ["linear-gradient(360deg, rgba(27, 2, 36,1) 0%, rgba(22, 22, 23,1) 150%)", "linear-gradient(360deg, rgba(22, 22, 23,1) 0%, rgba(27, 2, 36,1) 100%)"]);



    return ( <div className=" h-[150vh] bg-bgDark" ref={headerMainRef}>
        <motion.div className="w-full h-[100vh] flex flex-col gap-4 justify-center items-center sticky top-0 overflow-x-hidden ">
            {/* <motion.h1 className="
            text-3xl text-textGray "
            style={{scale: nameScale, opacity: nameOpacity}}>Benjamin Villadsen</motion.h1>
            <motion.h1 className="
            text-3xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl font-semibold text-white"
            style={{scale: titleScale, opacity: titleOpacity}} >Studying Software</motion.h1> */}
            <div className="absolute flex flex-col justify-center items-center  w-full h-full top-0"> 
                <motion.h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white"
                initial={{scale: 1, opacity: 1}}
                style={{scale: newNameScale, opacity: newNameOpacity}} >Benjamin Villadsen</motion.h1>
            </div>
            <div className="absolute flex flex-col justify-center items-center  w-full h-full top-0"> 
                <motion.h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white"
                initial={{scale: 1, opacity: 0}}
                style={{scale: newTitleScale, opacity: newTitleOpacity}} >Studying Software</motion.h1>
            </div>
        </motion.div>
    </div> );
}
 
export default Header;