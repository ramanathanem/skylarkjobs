import React from 'react'

export const Livejobs = () => {
    const animationDuration=3000;
    const frameDuration=1000/60;
    const totalFrames=Math.round(animationDuration/frameDuration);
    const easeOutQuad=t=>t*(2-t);
    const animateCountUp=e1=>{
        let frame=0;
        const countTo= parseInt(e1.innerHTML,10);
        const counter=setInterval(()=>{
            frame++
            const progress=easeOutQuad(frame/totalFrames)
            const currentCount=Math.round(countTo*progress)
            if(parseInt(e1.innerHTML,10)!==currentCount){
                e1.innerHTML=currentCount;

            }
            if(frame===totalFrames){
                clearInterval(counter)
            }

        },frameDuration)
    }
    const countupEls=document.querySelectorAll('.timer');
    countupEls.forEach(animateCountUp)
  return (
    <div>

    </div>
  )
}
