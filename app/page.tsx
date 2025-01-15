'use client'


import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";

import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
import BoxReveal from "@/components/ui/box-reveal";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";

import Image from "next/image";
import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import {Link as ScrollLink, Element} from "react-scroll";


const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];


const services = [
  {
    icon: "/images/s_6.png",
    title: "Web Design + Development",
    description:
      "Take your business to the next level with our web design and development services",
  },
  {
    icon: "/images/s_1.png",
    title: "Email Marketing",
    description:
      "Interact with your customers and increase sales with our email marketing services",
  },
  {
    icon: "/images/s_5.png",
    title: "Social Media Content Creation + Management",
    description:
      "Boost your brand's online presence with our social media marketing services",
  },
  {
    icon: "/images/s_3.png",
    title: "Google Business Account Setup",
    description:
      "Boost local visibility with professional Google Business account setup and optimization",
  },
  {
    icon: "/images/s_4.png",
    title: "AI Customer Service",
    description:
      "Enhance support with AI-powered customer service for instant, personalized responses 24/7",
  },
  {
    icon: "/images/s_2.png",
    title: "AI Lead Generation System",
    description:
      "Grow your business with AI-driven lead generation for smarter, faster prospect engagement",
  },
];


export default function Home() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">

      <Element name="top" className=" overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 xl:w-4/5 2xl:w-[68%] bg-white flex items-center justify-between py-6 px-4 md:px-8 mx-6">
        <Link href={"/"}>
        <Image 
        src = {'/logo/logo.webp'}
        alt="logo"
        width={1000}
        height={1000}
        className = "w-28"
        />

        </Link>

        <div className="absolute right-1/2  translate-x-1/2 transform">
        <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
          <ScrollLink 
          to='services'
          smooth={true}
          className="hover:text-green-900">
          Services            
          </ScrollLink>
          <ScrollLink 
          to='process'
          smooth={true}
          className="hover:text-green-900">
          Process            
          </ScrollLink>
          <ScrollLink 
          to='guarentees'
          smooth={true}
          className="hover:text-green-900">
          Guarentees            
          </ScrollLink>
        </div>

    </div>
    <div className="flex items-center gap-x-4">
      
      <Link href={'/meeting'}
      className="
      py-3 
      px-6  
      text-lg
      hover:bg-[#06402B]
      rounded-[6px]
      border-2
      border-black
      text-white
      bg-[#121212]
      transition
      duration 200
            hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
        Book a call
      </Link>
    </div>
      </Element>
      <main className="md:pb-10">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
        
        
        <h1>
          <CoverDemo />
        </h1>

        <p className="md:text-center text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500">
        Schedule a call with us to discuss your project and get a quote in minutes!
        </p>
        <div
            className="
                 flex 
                  md:justify-center 
                  items-center 
                  gap-x-4
                   "
          >
            <Link
              href="/meeting"
              className="py-3 
            px-10
            md:px-16
      md:text-xl
      hover:bg-[#06402B] 
      rounded-[6px]
      border-2 
      border-black 
      dark:border-white 
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
            >
              Book a Call
            </Link>
            
            <ScrollLink
              to="services"
              smooth={true}
              className="
              bg-white
   py-3 
   px-10
   md:px-16
      md:text-xl
        border-4
        border-black
        rounded-[6px]
        hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
            >
              Services
            </ScrollLink>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
            <BoxReveal boxColor={"#154D38"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-green-900"/>
                Design
              </p> 
              
            </BoxReveal>
            <BoxReveal boxColor={"#154D38"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-green-900"/>
                Development
              </p> 
              
            </BoxReveal>
            <BoxReveal boxColor={"#154D38"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-green-900"/>
                Marketing
              </p> 
              
            </BoxReveal>
            <BoxReveal boxColor={"#154D38"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-green-900"/>
                Strategy
              </p> 
              
            </BoxReveal>
          </div>
          

          <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
             
            <section className="overflow-hidden mt-10 md:w4/5">
              <InfiniteMovingLogos
              speed ="slow"
              direction="left"
              items={[
                {
                  logo:"/logo/bubblesLogo.webp",
                  name:"Bubbles",
                },
                {
                  logo:"/logo/skateskinsLogo.webp",
                  name:"SkateSkins",
                },
                {
                  logo:"/logo/dishinLogo.webp",
                  name:"Dishin",
                },
                {
                  logo:"/logo/716cannabLogo.png",
                  name:"716 Cannabis",
                }
              ]}
              />
            </section>



          </div>
          </div>
      </main>
      <Element name="services">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w=[68%] md:mx-auto">
        <h1>
          <WordPullUpDemo/>
        </h1>
        <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
        All of our services are designed to help your business stand out

        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
              >
                <Image
                  src={service.icon}
                  width={10000}
                  height={10000}
                  className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                  alt="image"
                />
                <h1 className="text-xl font-medium">{service.title}</h1>
                <p className="text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>

        </div>
      </Element>

      <section className="py-20">
        <ScrollBasedVelocityDemo/>
      </section>

      <Element name="process">
        <main className="md:px-0 mx-6 md:mx-auto">
          <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
            Our{" "}
            <span className="text-green-900 flex gap-x-1 items-center">
              {" "}
              <Image 
              src={"/icons/squiggle.svg"}
              width={1000}
              height={1000}
              className="w-6"
              alt="image"
              />
              Creative
              <Image 
              src={"/icons/star.svg"}
              width={1000}
              height={1000}
              className="w-6 mb-8"
              alt="image"
              />
            </span>{" "}
            Process
          </h1>
          <p className="text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
          All of our services are designed to help your business get noticed.

          </p>
          <div className="flex flex-col md:flex-row items-center justift-center w-full md:w-1/2 mx-auto">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <AnimatedBeamMultipleOutputDemo/>

          </div>
          <div className=" w-full md:w-1/2 order-1 md:order-2 md:ml-0">
            <BoxRevealDemo/>
          </div>

          </div>

        </main>
      </Element>

      

      <Element name="guarentees">
        <ShootingStarsAndStarsBackgroundDemo/>

      </Element>
      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
      <LetsMakeThingsHappenSection/>
      </section>
      <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
        <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium ">
            <Image
              src={"/logo/logo.webp"}
              width={10000}
              height={10000}
              className="w-40"
              alt="image"
            />{" "}
          </h1>
          
          {/*<p className="text-left  text-xl  text-gray-500">
            mangiadma@gmail.com
          </p>*/}
        </div>

        <div className="flex md:justify-center gap-x-4 mt-10">
          © 2025 Mangia DMA. All Rights Reserved.
          
        </div>
      </footer>






    </div>
  );
}
