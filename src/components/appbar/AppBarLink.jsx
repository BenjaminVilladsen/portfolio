//import use in view


import {Link as ScrollLink} from "react-scroll";

const AppBarLink = ({navRef, text, scrollToId}) => {


  
    //scrol ref into view
    const scrollToRef = () => {
        navRef.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    if (scrollToId !== undefined) {
        return ( <div className=" cursor-pointer" onClick={() => scrollToRef()} >
        <ScrollLink
        className="text-textDarkGray transition-all duration-150 ease-in-out"
        activeClass="text-textGray transition-all duration-150 ease-in-out"
        to={scrollToId}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        >{text}</ScrollLink>
    </div> );

    }
    else{
    return ( <div className=" cursor-pointer" onClick={() => scrollToRef()} >
        <h1
         >{text}</h1>
    </div> );
    }
}

export default AppBarLink;