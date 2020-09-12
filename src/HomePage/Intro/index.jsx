import {Container} from "./style"
import { gsap } from "gsap/dist/gsap";
import { useEffect } from "react"
export default  function Intro(){
    useEffect(() =>{
        const textrev = gsap.timeline();
    
        textrev.from(".headline-h2 h2 ", 1.8, {
            y: 200,
            ease: "power4.out",
            delay: 1,
            skewY: 1,
            stagger: {
                amount: 0.4,
            },
        });
    },[])
return <Container>


<div className="intro-row">
    <div className="headline-h2">
        <h2>After working at a boutuque in Paris, Christene moved to NYC she began designing her onw clothes. Elegance, ease , and accessibility have always been the core of her design philosophy.</h2>
       
    </div>



</div>



</Container>

}