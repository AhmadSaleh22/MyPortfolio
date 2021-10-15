import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
   const carouselRef = useRef();

   const scroll = (node, left) => {
     return node.scrollTo({ left, behavior: 'smooth' });
   }

  const handleClick = (e, i) => {
    e.preventDefault();

     if (carouselRef.current) {
       const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
       scroll(carouselRef.current, scrollLeft);
     }
   }

   const handleScroll = () => {
     if (carouselRef.current) {
       const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

       setActiveItem(index);
     }
   }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
   useEffect(() => {
     const handleResize = () => {
       scroll(carouselRef.current, 0);
     }

     window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionDivider />
      <br/>
      <br/>
      <br/>
      <br/>
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      <span>
          <h4 style={{ color:"white", display:"inline-block" }}>Hello!</h4></span> My name is <span>
          <h4 style={{ color:"white", display:"inline-block" }}>Ahmed Saleh</h4></span> and I enjoy creating things that live on the Internet. <br/>
          <span>
          <h4 style={{ color:"white", display:"inline-block" }}>My Interest</h4></span> in Web Development started back in 2017 when I decided to try editing custom Wordpress themes.<br/>
        Turns out hacking together a custom reblog button taught me a lot about HTML AND CSS!!<br/>
        Fast-forward to today, I Started School BA at Al-Azhar University Software Engineering.<br/>
        <span>
          <h4 style={{ color:"white", display:"inline-block" }}>And</h4></span> I’ve had the privilege of working at Matjaree, and then at EasySales AI, And now I'm working as Freelance and open to Full-time or Part-time Jobs.<br/>
          <span>
          <h4 style={{ color:"white", display:"inline-block" }}>My main Focus</h4></span> these days is building accessible, inclusive Web products experiences for a variety of clients.<br/>
          <span>
          <h4 style={{ color:"white", display:"inline-block" }}>I also</h4></span> on 2019 Lunched a course that covers everything you need to Build a web App with API Using Node.js, React.js.<br/>
          <span>
          <h4 style={{ color:"white", display:"inline-block" }}>Then on 2021,</h4></span> I Started Building Real Products API Using Laravel, Node.js, MongoDB, SQL and Firebase.<br/>

      </SectionText>

      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item,index) =>(
            <CarouselMobileScrollNode key={index} final={index === TOTAL_CAROUSEL_COUNT-1}>
              <CarouselItem
              index={index}
              id={`carousel__item-${index}`}
              active={activeItem}
              onClick={(e)=> handleClick(e,index)}
              >
                <CarouselItemTitle>
                  {item.year}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton 
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
