import Blog from "./Blogs";
import Hero from "./Hero";
import LogoClouds from "./LogoClouds";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Pricing />
      <Testimonials />
      <Blog />
      <LogoClouds />
    </div>
  );
}
