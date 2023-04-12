import { useEffect, useState } from "react";


//import social icon from react social icons
import { SocialIcon } from "react-social-icons";

import {IoClose} from 'react-icons/io5'

//import motion from framer motion
import { motion } from "framer-motion";


//import back arrow from react icons
import { IoIosArrowBack } from "react-icons/io";

import git from "/git.png";

const ProjectDetailsPage = ({project}) => {

    

    //on mount scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //navigate back to projects page
    const navigateBack = () => {
        window.history.back();
    }




    return ( <div className="w-[100vw] bg-bgDark pb-40 ">

        <div className="w-full  bg-bgDark px-5 lg:px-40 xl:px-60 pt-40">
            <div className="w-full h-full flex flex-col justify-start items-start">
                
            <motion.h1 
            initial={{opacity: 0, y: "20%"}}
            animate={{opacity: 1, y: 0, transition: {duration: 0.5, }}}
            className="
            text-lg sm:text-xl md:text-2xl lg:text-3xl
            text-textDarkGray text-start font-semibold font-mono">About the project
            </motion.h1>
                <motion.h1 
                initial={{opacity: 0, y: "20%"}}
                animate={{opacity: 1, y: 0, transition: {duration: 0.6, delay: 0.1}}}


                className="
                drop-shadow-lg
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                  font-semibold text-start"
                  style={{color: project.color}}
                  >{project.title}.</motion.h1>
                 <motion.div
                 initial={{opacity: 0, y: "40%"}}
                 animate={{opacity: 1, y: 0, transition: {duration: .5, delay: 0.1}}}
                  className='flex flex-row gap-4 justify-start items-center pb-2'>
                    { project.tags && project.tags.map((tag, index) => {
                        return (
                            <div key={index} className=" flex flex-row justify-center items-center  rounded-full" >
                                <p className=" text-[1.2rem] font-bold " style={{color: project.color}}>{tag.name}</p>
                            
                            </div>
                        )
                    })}
                </motion.div>
                 <motion.div 
                 initial={{opacity: 0, y: "20%"}}
                 animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.1}}}
                 
                 className="sm:w-1/2 flex flex-row gap-10 pt-4 pb-6">
                        {project.github&&<a href={project.github} target="(_blank)" className="flex flex-row gap-4 drop-shadow-sm  text-textGray  justify-start items-center"
                        
                        >
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                                <img className="object-cover " src={git} alt="missing img" />
                            </div>
                            
                             <h1 className="text-md ">Github Repo</h1>
                        </a>}
                        { project.projectLink&&
                        <a href={project.projectLink} target="(_blank)" className="flex flex-row  gap-4 justify-start items-center drop-shadow-sm text-textGray"
                        >
                        <div className="w-8 h-8 rounded-full overflow-hidden">
                                <img className="object-cover " src={project.image} alt="missing img" />
                            </div>
                             <h1 className="text-md ">Project Link</h1>
                        </a>
                        }

                 </motion.div>
                
                <motion.div 
                initial={{opacity: 0, y: "20%"}}
                animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.3}}}
                className="flex flex-col md:flex md:flex-row  gap-5 pt-5">
                    <div className=" flex"> 
                        <h1 className="text-3xl text-textGray text-primary">{project.description}</h1>
                    </div>
                    <div className=" flex col-span-1">
                        <h1 className="text-3xl text-textGray  text-primary">{project.secondDescription}</h1>
                    </div>
                </motion.div>

                {/* if no images */}
                {(project.images == null || project.images.length == 0) && 
                <motion.div
                className="w-full flex flex-col justify-center items-center py-14"
                initial={{opacity: 0, y: "20%"}}
                animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.4}}}
                
                >
                <h1 className="text-3xl text-textDarkGray text-center ">Sreenshots coming soon</h1>
                </motion.div>
                }
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-14">
                { project.images&& project.images.map((image, index) => {
                    return (
                        <div className="w-full  h-[50vh]">
                        <ImageComponent image={image} index={index} /> 
                        </div>
                    )
                })}
               
            </div>
        </div>
        











        <div className=" fixed top-0 w-[100vw] bg-bgGray flex flex-row justify-start items-center py-2 px-5 lg:px-40 xl:px-60">
            <div onClick={navigateBack} className="flex flex-row justify-start items-center cursor-pointer ">
            <IoIosArrowBack color="white" size={40} className=""  />
            <h1 className="text-lg  text-white">Back</h1>
            </div>
        </div>
    </div> );
}

const ImageComponent = ({image, index}) => {

    let [fullScreen, setFullScreen] = useState(false);

    const openFullScreen = () => {
        setFullScreen(true);
    }

    return (
        <>
        <motion.div onClick={openFullScreen}
                        
        key={index} className="w-full h-full flex flex-col justify-center  rounded-2xl items-center active:scale-95 lg:hover:scale-105 lg:active:scale-100 transition-all duration-200 ease-in-out">
            <motion.img 
            initial={{ opacity: 0, y: "20%", }}
            animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.2*index}}}
            className="w-full h-full object-cover aspect-square rounded-2xl border-2 border-black" src={image} alt="project image" />
        </motion.div>
        
        {/* image in full screen mode */}
        
        <motion.div
        style={{display: fullScreen ? "flex" : "none"}}
        animate={{opacity: fullScreen?1:0, transition: {duration: 0.2}}}

        onClick={() => setFullScreen(false)}
         className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className=" p-5 sm:px-20 relative rounded-2xl overflow-hidden h-[80vh] object-contain flex flex-col justify-center items-center  bg-transparent">
               <motion.img
               animate={{opacity: fullScreen?1:0, y:fullScreen?"0%":"10%", transition: {duration: 0.2}}}
                className="w-full h-full object-contain" src={image} alt="project image" />
            </div>
        </motion.div>
        
        </>


    );

}
 
export default ProjectDetailsPage;