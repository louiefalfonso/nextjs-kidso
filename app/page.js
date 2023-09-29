import Script from "next/script"
import SliderArea from '@/components/SliderArea'
import BrandArea from '@/components/BrandArea'
import ServicesArea from '@/components/ServicesArea'
import AboutArea from '@/components/AboutArea'
import CounterArea from "@/components/CounterArea"
import ClassArea from "@/components/ClassArea"
import StepsArea from "@/components/StepsArea"
import TeamArea from "@/components/TeamArea"
import TestimonialArea from "@/components/TestimonialArea"
import BlogArea from "@/components/BlogArea"
import ContactArea from "@/components/ContactArea"

export default function Home() {
  return (
  <>
    <main>
    <SliderArea/>
    <BrandArea/>
    <ServicesArea/>  
    <AboutArea/>
    <CounterArea/>    
    <ClassArea/>
    <StepsArea/>
    <TeamArea/>
    <TestimonialArea/>
    <BlogArea/>
    <ContactArea/>
    </main>

    <Script type="text/javascript" id="hs-script-loader" async defer src="js/vendor/modernizr-3.5.0.min.js"/> 
    <Script type="text/javascript" id="hs-script-loader" async defer src="js/vendor/jquery-3.6.0.min.js"/>
    <Script type="text/javascript" id="hs-script-loader" async defer src="js/popper.min.js"/>
    <Script type="text/javascript" id="hs-script-loader" async defer src="js/bootstrap.min.js"/>
    <Script type="text/javascript" id="hs-script-loader" async defer src="js/slick.min.js"/>
    <Script type="text/javascript" id="hs-script-loader" async defer src="js/paroller.js"/>
    <Script type="text/javascript" id="hs-script-loader" async defer src="js/wow.min.js"/>
    <Script type="text/javascript" id="hs-script-loader" async defer src="js/parallax.min.js"/>
    <Script type="text/javascript" id="hs-script-loader" async defer src="js/jquery.waypoints.min.js"/>
    <Script type="text/javascript" id="hs-script-loader" async defer src="js/jquery.counterup.min.js"/>
    <Script type="text/javascript" id="hs-script-loader" async defer src="js/jquery.scrollUp.min.js"/>
    <Script type="text/javascript" id="hs-script-loader" async defer src="js/jquery.meanmenu.min.js"/> 
    <Script type="text/javascript" id="hs-script-loader" async defer src="js/jquery.magnific-popup.min.js"/> 
    <Script type="text/javascript" id="hs-script-loader" async defer src="js/parallax-scroll.js"/> 
    <Script type="text/javascript" id="hs-script-loader" async defer src="js/element-in-view.js"/> 
    <Script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"/>
    <Script src="https://unpkg.com/imagesloaded@5/imagesloaded.pkgd.js"/>
    <Script type="text/javascript" id="hs-script-loader" async defer src="js/main.js"/>  
  </>
  )
}
