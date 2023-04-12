
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { NavLink } from 'react-router-dom'

const ProjectsCard = ({title, description, image, color, flipped, url, tags}) => {

    


    let cardRef = useRef(null);
    let cardInView = useInView(cardRef, {once: false, threshold: 0.5})


    let titleStyle = {
        color: color,

    }


    //make a 
    

    if (flipped === true) {
    return ( 
        <NavLink to={url}>
    <motion.div
        ref={cardRef}
        //when in view animate
        animate={{opacity: cardInView? 1 : 0, x: cardInView? "0%" : "20%",}}
        transition={{duration: .5, damping: 100,}}
        
        className="">
        <div className="w-full grid grid-flow-col sm:grid-cols-2 rounded-3xl overflow-hidden cursor-pointer
        lg:hover:scale-[101%] active:scale-95 lg:active:scale-100 transition-all duration-150  ">
            <div className='w-full h-full p-5 bg-black hidden sm:block '>
                <div className="relative w-full h-full rounded-xl overflow-hidden ">
                    <img className="absolute top-0 left-0 w-full h-full object-cover" src={image} alt="project image" />
                </div>
            </div>
            <div className="w-full h-full bg-black flex flex-col items-start justify-between gap-2 p-5">
                <div >
                <h1 className="text-4xl pb-2 font-bold  
                
                " 
                
                
                style={titleStyle} >{title?? "Mangler titel"}</h1>
                 <div className='flex flex-row gap-4 justify-start items-center pb-2'>
                    { tags && tags.map((tag, index) => {
                        return (
                            <div key={index} className=" flex flex-row justify-center items-center  rounded-full" >
                                <p className=" text-[.8rem] font-bold " style={{color: color}}>{tag.name}</p>
                            
                            </div>
                        )
                    })}
                </div>
                <p className="text-xl font-semibold text-textGray pb-10">{description ?? "Mangler beskrivelse"}</p>
                </div >
               
                <div>
                 <button className=" text-md text-textDarkGray font-semibold py-2 rounded-lg">Tap to read more</button>
                </div>
            </div>
        </div>

    </motion.div> </NavLink>);}else{
        return(
            <NavLink to={url}>
        <motion.div 
        ref={cardRef}
        //when in view animate
        animate={{opacity: cardInView? 1 : 0, x: cardInView? "0%" : "-20%",}}
        transition={{duration: .5, damping: 100,}}
        className=" ">
        <div className="w-full grid grid-flow-col sm:grid-cols-2 rounded-3xl overflow-hidden 
          
          lg:hover:scale-[101%] active:scale-95 lg:active:scale-100 transition-all duration-150  cursor-pointer ">
            <div className="w-full h-full bg-black flex flex-col items-start justify-between gap-2 p-5">
                <div>
                <h1 className="text-4xl pb-2 font-bold  " 
                style={titleStyle} 
                
                >{title?? "Mangler titel"}</h1>
                <div className='flex flex-row gap-4 justify-start items-center pb-2'>
                    { tags && tags.map((tag, index) => {
                        return (
                            <div key={index} className=" flex flex-row justify-center items-center  rounded-full" >
                                <p className=" text-[.8rem] font-bold " style={{color: color}}>{tag.name}</p>
                            
                            </div>
                        )
                    })}
                </div>
                <p className="text-xl font-semibold text-textGray pb-10">{description ?? "Mangler beskrivelse"}</p>
                </div>
                <div>
                
                <button className="  bg-primary text-md text-textDarkGray font-semibold py-2 rounded-lg">Tap to read more</button>
                </div>
                
            </div>
            <div className='w-full h-full p-5 bg-black hidden sm:block '>
                <div className="relative w-full h-full rounded-xl overflow-hidden ">
                    <img className="absolute top-0 left-0 w-full h-full object-cover" src={image} alt="project image" />
                </div>
            </div>
            
            

        </div>

    </motion.div></NavLink>);

    }
}
 
export default ProjectsCard;