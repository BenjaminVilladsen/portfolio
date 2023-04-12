import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Arrow from "/arrow.svg";
import resume from "/resume.pdf";

const About = ({aboutRef, headerRef}) => {
    
    const aboutMainRef = useRef(null);
    const textContainerRef = useRef(null);

    //based on the scroll position of the header, change the opacity of the text
    const { scrollYProgress } = useScroll( {target: aboutMainRef, offset: ["start start", "end center"]},);

    //open pdf on click
    const openResume = () => {
        window.open(resume);
    }

    let btnOpacity = useTransform(scrollYProgress, [.6, .7], [0, 1]);
    let btnY = useTransform(scrollYProgress, [.5, .7], ["0%", "-30%"]);

    //colors:
    // dark blue: rgba(0, 8, 38,1)
    //black: rgba(22, 22, 23,1)


    const aboutMePoints = [
        "Hello!",
        " I'm a software developer with a passion for building mobile and web applications. ",
        "My skills include React.js, Flutter, and Figma for front-end development,",
        " as well as node.js, express, and Java with Spring-boot for back-end development. ",
        "If you're looking for a dedicated software developer to join your team or work on your project,",
        " feel free to contact me."
    ];
    //useState


    let aboutMeTextY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);


    
    

    const gray = "#86868B"
    const white = "#FFFFFF"
    const initalAndLastColor = "#4656db";

    //create a list of colors for the points
    const generatePointColors = (points) => {
        let list = [];
        
        const steps = 1 / points.length;
        for(let i = 0; i < points.length; i++) {
            //calculate the start and end of the range for each point
            
            if (i < points.length - 1 && i != 0) {
            list.push(useTransform(scrollYProgress, [i * steps, (i + 1) * steps, (i + 2) * steps], [gray, white, gray]));
            console.log(i * steps, (i + 1) * steps, (i + 2) * steps);
            }  else {
                list.push(useTransform(scrollYProgress, [i * steps, (i + 1) * steps, (i + 2) * steps], [gray, initalAndLastColor, gray]));
            }
        }

        console.log(list);

        return list;
    }
    const generateUnderLines = (points) => {
        let list = [];
        
        const steps = 1 / points.length;
        for(let i = 0; i < points.length; i++) {
            //calculate the start and end of the range for each point
            
            if (i < points.length - 1 && i != 0) {
                list.push(useTransform(scrollYProgress, [i * steps, (i + 1) * steps, (i + 2) * steps], 
                //border bottom none to border bottom 1px solid white
                [`0px solid white`, `4px solid white`, `0px solid white`]
                ));
            console.log(i * steps, (i + 1) * steps, (i + 2) * steps);
            }  else {
                list.push(useTransform(scrollYProgress, [i * steps, (i + 1) * steps, (i + 2) * steps], 
                //border bottom none to border bottom 1px solid white
                [`0px solid ${initalAndLastColor}`, `4px solid ${initalAndLastColor}`, `0px solid ${initalAndLastColor}`]
                ));
            }
        }

        console.log(list);

        return list;
       
    }
    const [pointColors, setPointColors] = useState(generatePointColors(aboutMePoints));
    const [pointUnderLines, setPointUnderLines] = useState(generateUnderLines(aboutMePoints));


    let headerBg = useTransform(scrollYProgress, [0, .35], ["#00000000", "#161617"]);

    


    



    return ( <div className=" "  ref={aboutMainRef}>
        {/* this is where we want to scroll on "home" navbar tap */}
        <motion.div ref={headerRef} className="w-full h-[100vh]" id="home"
        
        >
        { /* filler this is actually where the home is */}
        </motion.div>
        
        {/* this is where we want to scroll on "about" navbar tap */}
        <motion.div
        style={{background: headerBg}}
        ref={aboutRef} id="about"
         className="w-full overflow-x-hidden flex flex-col justify-center items-center px-5 sm:px-10 md:px-32 bg-bgDark lg:px-40 xl:px-72 rounded-t-3xl md:rounded-t-[4rem] pt-[2vh]">
            {/* title */}
            
            <div className="  w-full flex flex-col  items-start justify-center pt-20 pb-10 lg:pt-20 lg:pb-10">
                <h1 className="
                text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold
                 text-textDarkGray text-start font-mono
                 
                 ">About</h1>
                <h1 className="

                text-5xl
                md:text-6xl
                lg:text-7xl
                 text-textGray font-semibold text-start">What can i do?</h1>
            </div>
            {}
            <p 
            
            className="  text-3xl
            sm:text-4xl
            lg:text-5xl xl:text-6xl font-semibold leading-[2.5rem] sm:leading-[3rem] md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4.3rem] ">
                {     
                    aboutMePoints.map((point, index) => {
                        return <motion.span  key={index}
                        style={{color: pointColors[index]}}>{point}</motion.span>
                    })
                }

            </p>
            <div className="h-[10vh]"></div>
            {/* resume buttom */}
            <motion.div 
            style={{   opacity: btnOpacity,
                y: btnY
            }}
            className="w-full flex flex-col items-end justify-center pb-20 lg:pt-20 lg:pb-20">
            <button 
            onClick={openResume}
            className=" max-sm:w-full px-10 py-4 bg-transparent
             transition-all duration-150 ease-in-out
            border-2 border-indigo-600
            lg:hover:scale-105
            lg:active:scale-100
            active:scale-95
             text-2xl lg:text-3xl  rounded-lg font-semibold
             
             ">
            <p className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Check out my resume</p>
                
                </button>
            </motion.div>
            

        </motion.div>
    </div> );
}
 
export default About;