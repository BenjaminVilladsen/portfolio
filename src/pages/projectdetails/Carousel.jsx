import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';

const Carousel = ({images, isMobile}) => {
  const [imgList, setImgList] = useState(images)

  const [slicePercentage, setSlicePercentage] = useState(100)


  const next = () => {}
  const prev = () => {}


  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleResize = () => {
    if (isMobile){
      if (window.innerWidth > 1024 ) {
        setSlicePercentage(100/3)
      }
      else if (window.innerWidth > 768) {
        setSlicePercentage(50)
      }
      else {
        setSlicePercentage(100)
      }

    } else {
      setSlicePercentage(100)
    }
  }

  const [activeIndex, setActiveIndex] = useState(0)

  


  return (
    <div className='w-full py-20'>
      <div className='w-full  bg-opacity-100 rounded-3xl'>
        <ResponsiveCarousel  useKeyboardArrows autoFocus autoPlay interval={2000} 
        centerMode 
        centerSlidePercentage={slicePercentage} 
        stopOnHover 
        swipeable 
        showStatus={false} 
        showArrows={false} 
        showThumbs={false} 
        
        onClickItem={
          (index) => {
            if (index === activeIndex -1)
              setActiveIndex(index)  
            else if (index === activeIndex +1)
              setActiveIndex(index)
            else
              setActiveIndex(index)
          }
        }
        selectedItem={activeIndex}
        className='flex flex-col justify-center items-center h-full w-full bg-white bg-opacity-5 border-2 border-black rounded-2xl sm:rounded-3xl ' >
          {imgList.map((image, index) => {
            return (
                  <div key={index} className='flex flex-col justify-center items-center h-fit aspect-auto w-fit p-5 '>
                    <img src={image} className='h-full rounded-3xl object-contain aspect-auto max-h-[80vh] ' alt={`Image ${index}`} />
                  </div>
              
            );
          })}
        </ResponsiveCarousel>
      </div>
    </div>
  );
}

export default Carousel;
