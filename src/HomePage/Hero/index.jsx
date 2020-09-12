import {Container} from "./style"
import { gsap } from "gsap/dist/gsap";
import { useEffect } from "react"

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default  function Hero(){
useEffect(() =>{
    const textrev = gsap.timeline();

    textrev.from(".headline-h1 h1", 1.8, {
        y: 200,
        ease: "power4.out",
        delay: 1,
        skewY: 10,
        opacity:1,
        stagger: {
            amount: 0.4,
        },
    });
    textrev.from(".headline-h1 a", 2, {
        y: 200,
        ease: "power4.out",
     
        skewY: 10,
        stagger: {
            amount: 0.6,
        },
    });
    textrev.from(".bg-img", 2.2, {
        x: 50,
        scale:1,
        ease: "power4.out",
     
        
        stagger: {
            amount: 0.8,
        },
    });
},[])

return <Container>


<div className="hero-row">
    <div className="headline-h1">
        <h1>Christene Creville Freeman Fashion Designer in NYC</h1>
        <a href="/" className="btn">VIEW WORK</a>
    </div>


       



 <div className="bg-img"></div>
</div>



</Container>

}