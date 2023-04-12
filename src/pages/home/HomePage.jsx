import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";

import Header from "./Header/Header";
import About from "./About";
import Projects from "./projects/Projects";
import Contact from "./Contact";
import AppBar from "../../components/appbar/AppBar";
import MobileHeader from "./Header/MobileHeader";
const HomePage = ({projects}) => {

    const headerRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    return ( <div className="w-[100vw] overflow-hidden">
        <div >
            {/* <div className="hidden md:block">
            <Header/>
            </div> */}
            <div className="fixed -z-10 ">
                <MobileHeader aboutRef={aboutRef}/>
            </div>
        </div >
        <div >
            <About aboutRef={aboutRef} headerRef={headerRef} />
        </div>
        <div ref={projectsRef} id="projects">
            <Projects projects={projects}/>
        </div>
        <div ref={contactRef} id="contact">
            <Contact/>
        </div>
        <div >
            <AppBar refs={{
                headerRef: headerRef,
                aboutRef: aboutRef,
                projectsRef: projectsRef,
                contactRef: contactRef,
            }}/>
        </div>
        
        

    </div> );
}
 
export default HomePage;