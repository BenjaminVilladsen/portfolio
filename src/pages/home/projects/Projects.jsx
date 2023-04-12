import { useScroll, useTransform, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import ProjectsCard from "./ProjectsCard";
import moveboksImg from "/moveboks.jpeg";


const Projects = ({projects}) => {

  
    
    const headerMainRef = useRef(null);
    const textContainerRef = useRef(null);

    //based on the scroll position of the header, change the opacity of the text
    const { scrollYProgress } = useScroll({target: headerMainRef});

    let titleScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    let titleOpacity = useTransform(scrollYProgress, [.6, .9], [1, 0]);
    let nameScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    let nameOpacity = useTransform(scrollYProgress, [.6, 1], [1, 0]);

    let titleRef = useRef(null);
    let titleInView = useInView(titleRef, {once: false})

    //when the title is in view log it
    // useEffect(() => {
    //     if(titleInView){
    //         console.log("title in view");
    //     }
    // }, [titleInView])
  

    //colors:
    // dark blue: rgba(0, 8, 38,1)
    //black: rgba(22, 22, 23,1)



    return ( <div className=" bg-bgDark pb-[20vh]" ref={headerMainRef}>
         <motion.div
         className="w-full flex flex-col justify items-center px-5 sm:px-10 md:px-32 lg:px-40 xl:px-72 ">
            {/* title */}
            <div className="  w-full flex flex-col items-start px-5 sm:px-0 sm:items-center justify-center pt-20 pb-10 lg:pt-20 lg:pb-10">
                <motion.h1 
                animate={{opacity: titleInView? 1 : 0, y: titleInView? "0%" : "20%",}}
                transition={{duration: .3, delay: .2, ease: "easeInOut",}}
                className="
                text-lg sm:text-xl md:text-2xl lg:text-3xl
                 text-textDarkGray text-center font-semibold font-mono">Projects</motion.h1>
                <motion.h1 
                ref={titleRef}
                //when in view
                animate={{opacity: titleInView? 1 : 0, y: titleInView? "0%" : "20%",}}
                transition={{duration: .3, delay: .3, ease: "easeInOut",}}
                
                className="
                
                text-5xl
                md:text-6xl
                lg:text-7xl
                 text-textGray font-semibold text-start sm:text-center">What i've done so far.</motion.h1>
            </div>
            <div className="w-full grid grid-flow-row gap-10">
                {projects.map((project, index) => {
                    return <ProjectsCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    color={project.color}
                    url={project.url}
                    tags={project.tags}
                    flipped={index%2 === 0 ? false : true}
                    />
                })}
                
            </div>
        </motion.div>
    </div> );
}
 
export default Projects;