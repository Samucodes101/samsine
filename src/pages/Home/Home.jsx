import About from "./About";
import Blog from "./Blogs";
import Hero from "./Hero";
import LogoClouds from "./LogoClouds";
import Pricing from "./Pricing";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Stats from "./Stats";
import Servicestwo from "./Servicestwo";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 bg-black">
      <div>
      <Hero />
      <LogoClouds />
      </div>
      
      {/* <About /> */}
      <Services />
      <Stats/>
      <Servicestwo/>

      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      {/* <Blog /> */}
    </div>
  );
}
