import About from "./About";
import Blog from "./Blogs";
import Hero from "./Hero";
import LogoClouds from "./LogoClouds";
import Pricing from "./Pricing";
import Services from "./Services";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Testimonials />
      <Blog />
      <LogoClouds />
    </div>
  );
}
