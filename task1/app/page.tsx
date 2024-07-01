import About from "@/components/About";
import Contact from "@/components/Contact";

import Header from "@/components/Header";
import Midsec from "@/components/Midsec";
import Project from "@/components/Project";


export default function Home() {
  return (
  <div>
    <div className=" flex flex-col">
    
   <div id="home-section">
   <Header/>
   <Midsec/>
      </div>
      <div id="about-section">
   <About/>
   </div>
   <div id="project-section">
   <Project/>
   </div>

   <div id="contact-section">
  <Contact/>
   </div>
   </div>

  </div>
  );
}
