import ProjectSingle from "./ProjectSingle";
import speak from "../icons/speakup.png"
import genetic from "../icons/genetic.png"
import talkify from "../icons/talkify.png"
import home from "../icons/homebizz.png"
import { StaticImageData } from 'next/image';

export default function Project() {
     return (
          <div className="m-2 mb-32">
          <div className="grad lg:text-4xl text-2xl m-2 mb-8" > Projects-</div>
          <div>
               
          </div>
          <div className="m-2 flex flex-col gap-10">
               
               <ProjectSingle projectName="Speak Up" projectDesc="SpeakUp is a blog platform designed to empower users to easily share their views and opinions with the world. Whether you're passionate about technology, politics, art, or anything in between, SpeakUp provides a space for you to express yourself freely.User-friendly Interface: SpeakUp offers a clean and intuitive interface, making it effortless for users to navigate and share their thoughts.
Easy Login: Seamlessly login with just a few clicks using your preferred authentication method.
Secure Authorization: SpeakUp utilizes JSON Web Tokens (JWT) for secure authorization, ensuring your data remains protected." projectLink="https://speakup-phi.vercel.app/" img={speak.src} techstack="Frontend- React.js, Tailwind Backend- HONO,Prisma Database- PostgreSQL"/>
 <ProjectSingle projectName="Talkify" projectDesc="
This real-time chat application, leveraging both Express and WebSocket technologies, facilitates instant communication between users. It utilizes Express for handling HTTP requests and WebSocket for real-time, bidirectional communication. Users can connect, exchange messages, and view the number of connected users in real-time"
 projectLink="https://talkify-five.vercel.app/" img={talkify.src} techstack="Frontend- React.js Tailwind Backend- Express,TypeScript,WebSockets"/>
<ProjectSingle projectName="Genetic Algorithm" projectDesc="It aims at solving complex Knapsack problems using Genetic Algorithm and the accuracy depends on the iterations that
code runs
• Binary Knapsack was solved using Genetic Algorithm using Core Java concepts
• Fractional Knapsack(Real life Knapsack) was solved using Genetic Algorithm using Core Java concepts" projectLink="https://github.com/rishitkamboj/Genetic-Algorithm/tree/main" img={genetic.src} techstack="Core JAVA"/>
            
          </div></div>
     );
}