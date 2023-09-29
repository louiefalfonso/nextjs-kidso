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

    <Script type="text/javascript" id="hs-script-loader" async defer src="js/bootstrap.min.js"/>
  </>
  )
}
