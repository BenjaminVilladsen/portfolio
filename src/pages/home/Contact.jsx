
import React from 'react';
import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { SocialIcon } from 'react-social-icons';
import emailjs from '@emailjs/browser';
import AlertBox from '../../components/AlertBox';

const Contact = () => {

    const contactRef = useRef(null);

    const sendMail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_81789wf', 'template_v81g3se', contactRef.current, 'tLrCqKHsqWv0ym8aH')
          .then((result) => {
              console.log(result.text);
                handleSuccess();
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

      let [showAlert, setShowAlert] = React.useState(false);

      const handleSuccess = () => {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 8000);
      }

      const hideAlert= () => {
        setShowAlert(false);
      }

    return ( <div className=" bg-bgLight relative pb-40">
        
    <motion.div
     className="w-full overflow-x-hidden top-0 flex flex-col justify items-center px-5 md:px-32 lg:px-40 xl:px-72 ">
        {/* title */}
        <div className="  w-full flex flex-col items-start justify-center pt-20 pb-10 lg:pt-20 lg:pb-10">
            <h1 className="
            text-lg sm:text-xl md:text-2xl lg:text-3xl
             text-textDarkGray text-start font-semibold font-mono">Contact</h1>
            <h1 className="
            
            text-5xl
            md:text-6xl
            lg:text-7xl
             text-bgDark font-bold text-start">Get in touch.</h1>
             <div className='flex flex-row gap-5 pt-4'>
             <SocialIcon className='scale-80' target="(_blank)" url='https://www.linkedin.com/in/bmvilladsen/'/>
             <SocialIcon className='scale-80' target="(_blank)" url='https://github.com/BenjaminVilladsen'/>
             </div>
        </div>
        <div className='w-full'>
            {/* form with email and message */}
            <form className="w-full flex flex-col items-start justify-start" ref={contactRef} onSubmit={
                sendMail
             }>
                <div className="w-full flex flex-col gap-10 items-start justify-start">
                    <div className='w-full'>
                        <label className="text-lg text-textDarkGray">What is your Name?</label>
                        <input required name='user_name' className="w-full h-12 border-2 border-textDarkGray rounded-lg px-4 py-2 text-lg focus:outline-none focus:border-bgDark" type="text" placeholder='Enter your name here' />
                    </div>
                    <div className='w-full'>
                        <label className="text-lg text-textDarkGray">What is your e-mail?</label>
                        <input required name='user_email' className="w-full h-12 border-2 border-textDarkGray rounded-lg px-4 py-2 text-lg focus:outline-none focus:border-bgDark" type="email" placeholder='Enter your email here' />
                    </div>
                  
                    <div className='w-full'>
                        <label className="transition-all duration-150 ease-in-out text-lg text-textDarkGray">What can i do for you?</label>
                        <textarea name='message' required className=" transition-all duration-150 ease-in-out w-full h-40 border-2 border-textDarkGray rounded-lg px-4 py-2 text-lg focus:outline-none focus:border-bgDark" type="email" placeholder='Enter your message here' />
                    </div>
                    <div className='w-full flex flex-col justify-center sm:items-end'>
                    <button type='submit' className="
                    max-md:w-full px-10 py-4
                    w-1/2
                    transition-all duration-150 ease-in-out
                    lg:hover:scale-105
                    lg:active:scale-100
                    active:scale-95
                    bg-bgDark
                    text-white text-2xl lg:text-3xl  rounded-lg font-semibold">Send Mail</button>
                    </div>
                </div>
                
            </form>
        </div>
        
        

    </motion.div>
    <motion.div 
    transition={{duration: .3, ease: 'easeInOut'}}
    animate={{opacity: showAlert ? 1 : 0, pointerEvents: showAlert ? 'all' : 'none',}}
    style={{opacity: showAlert ? 1 : 0, pointerEvents: showAlert ? 'all' : 'none',
    }}>
        <AlertBox onTap={hideAlert} ></AlertBox>
    </motion.div>
</div> );
}
 
export default Contact;