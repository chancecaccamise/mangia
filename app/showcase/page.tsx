import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import ShowcaseNavbar from "@/components/showcase-navbar";

import Footer from "@/components/ui/footer";

const Showcase = () => {
    return (
      <div
        className="
          overflow-clip 
   inset-0 
   -z-10 h-full w-full bg-[#fafafa]
    bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
bg-[size:14px_24px]">
        <ShowcaseNavbar />
        <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
          <div className="flex items-center justify-center relative">
            
            <div
            className="text-3xl pt-20 lg:text-5xl font-semibold max-w-3xl mx-auto md:text-center z-20  ">
              Design & Code That Helps Your Business Grow
              </div>

          </div>
          <p className="md:text-center text-xl md:text-2xl my-6   md:w-4/5 mx-auto text-gray-500">
            Have a look at some the recent websites we&apos;ve worked on.
          </p>
            
          <div className="pt-5 pb-20">
            <BlurFadeDemo />
          </div>
          
  
          
  
  
        </section>
  
        <Footer />
      </div>
    );
  };
  
  export default Showcase;
