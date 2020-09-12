import {Container} from "./style"
import { gsap } from "gsap/dist/gsap";
import { useEffect } from "react"

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default  function WorkExpo(){
    useEffect(() =>{
        
        const textrev = gsap.timeline({
            scrollTrigger:{
                trigger:".workexpo-row",
                scrub:true,
                
                start:"top center",
                end:"100%"
            }
        });

        // COL-----1
    
        textrev.from(".wexp-1 ", 2, {
            opacity:0,
    
            ease: "power4.out",
          
           
        });
        textrev.to(".wexp-1", 2, {
            opacity:1,
       
            ease: "power4.out",
         
           
           
            
        });



        // COL-----2
    
        textrev.from(".wexp-2 ", 2, {
            opacity:0,
       
            ease: "power4.out",
            
          
           
            stagger: {
                amount: 0.4,
            },
        });
        textrev.to(".wexp-2", 3, {
            opacity:1,
    
            ease: "power4.out",
     
           
            stagger: {
                amount: 0.4,
            },
        });
    },[])
return <Container>


<div className="workexpo-row wexp-1">
    

    <div className="col-left">
        <p>Anderson</p>
        <p>Preserving Shap</p>
        <p className="hess">Hess Nature Look</p>
        <p>Marie CLarie AW8</p>
        <p>Bon Marche</p>
        <p>Fashion Week </p>
        <p>Hambroidded </p>

    </div>
    <div className="col-right">
        <img src="/assets/utils/img0-2.jpeg" alt="work exploration"/>
    </div>



</div>


<div className="workexpo-row wexp-2">
    

    <div className="col-left ">
        <p>Anderson</p>
        <p>Preserving Shap</p>
        <p>Hess Nature Look</p>
        <p  className="hess">Marie CLarie AW8</p>
        <p>Bon Marche</p>
        <p>Fashion Week </p>
        <p>Hambroidded </p>

    </div>
    <div className="col-right">
        <img src="/assets/utils/img0-4.jpg" alt="work exploration"/>
    </div>



</div>

<div className="work-inside">

  <div className="work-inside-row">


    <div className="headline-h3">
        <h3>Marie Claire AW8</h3>
    </div>

    <div className="headline-image">
    <img src="/assets/utils/img0-4.jpg" alt="work exploration"/>
    
    </div>
   

    <div className="intro-work-inside">
    <div className="subheadline-h4">
        <h6>YEAR 2018</h6>
    </div>
        <div className="intro-text">
        <p>
            I Believe that my clothes can give people a better image of themselves, that i can increase their feelings of confidience and happiness. be fashionable.
        </p>
        </div>

        <div className="row-intro-inside">
            <div className="c-1">
    <img src="/assets/utils/img0-6.jpg" alt="work exploration"/>

            </div>
            <div className="c-2"></div>
        </div>

        <div className=" r-2">
            
            <div className="c-1">
                <p>
                    I want to thank all the fomous and the unknoew, who have been so faithful to me and given me so much joy.
                </p>
            </div>
            <div className="c-2">
    <img src="/assets/utils/img0-7.jpg" alt="work exploration"/>

            </div>
        </div>
    </div>

  </div>


</div>

</Container>

}