import React, { useRef } from 'react'
import AnimatedTitle from '../AnimatedTitle/AnimatedTitle'
import gsap from 'gsap';
import Button from '../Button/Button';

const Story = () => {
    const frameRef=useRef(null);
    const handleMouseLeave=()=>{
        const element=frameRef.current;
        gsap.to(element,{
            
            rotateX:0,
            rotateY:0,
            duration:0.3,
            ease:'power1.out'})

    }
    const handleMouseMove=(e)=>{
        const{ clientX, clientY }=e;
        const element=frameRef.current;
        if(!element) return;
        const react=element.getBoundingClientRect();
        const x=clientX - react.left
        const y=clientY - react.top
        const centerX=react.width/2;
        const centerY=react.height/2;
        const rotateX=((y-centerY)/centerY) * 10;
        const rotateY=((x-centerX)/centerX) * -10;

        gsap.to(element,{
            rotateX,rotateY,
            duration:0.3,
            transformPerspective:500,
            ease:'power1.out'})
    }
  return (
    <section id='story' className='min-h-dvh w-screen bg-black text-blue-50 '>
        <div className='flex size-full flex-col items-center py-10 pb-24'>
        <p className="font-general text-sm uppercase md:text-[16px]">
          the multiversal ip world
        </p>
         <div className='relative size-full'>
            <AnimatedTitle
            title="The st<b>o</b>ry of <br />hidden real<b>m</b>"
            sectionId='#story'
            containerClass='mt-5 pointer-events-none mix-blend-difference relative z-10'
            />
            <div className='story-img-container'>
                <div className='story-img-mask'>
                    <div className='story-img-content'>
                        <img src="/img/entrance.webp"
                        ref={frameRef}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseLeave}
                        onMouseEnter={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                        alt="entrance"
                        className='object-contain'
                        />
                    </div>
                </div>
                <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
            </div>
         </div>
         <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start" id='join-zentry'>
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>

            <Button
              id="realm-btn"
              title="discover prologue"
              containerClass="mt-5"
            />
          </div>
        </div>
        </div>  
    </section>
  )
}

export default Story