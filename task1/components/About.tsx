import Image from 'next/image';
import portfolioImage from '@/public/portfolio.jpg';
import Skills from './Skills';

import c from "../icons/c.jpeg"
import css from "../icons/css.png"
import html from "../icons/html.png"
import java from "../icons/java.png"
import js from "../icons/js.png"
import mongo from "../icons/mongoDB.jpeg"
import ns from "../icons/nodejs.jpg"
import react from "../icons/react.png"
import sql from "../icons/sql.jpeg"
import ts from "../icons/ts.png"
import cloud from "../icons/cloudfare.png"
import aws from "../icons/aws.svg"

export default function About() {
  return (
    <div className='m-2 mb-10'>
      <div className="flex flex-col text-gray-100 m-2 gap-5 md:flex-row mb-10">
        <div>
          <Image  
            src={portfolioImage}
            alt="Image description"
            className="h-auto  rounded-lg shadow-xl dark:shadow-gray-800"
          />
        </div>
        <div>
          <div className="grad justify-center lg:text-7xl text-5xl ">About Me</div>
          <div className="lg:text-2xl text-1xl">
            Since childhood, I&apos;ve been drawn to computers, from troubleshooting to exploring new software installations. I&apos;ve set my sights on becoming a Software Engineer in the dynamic world of IT.

            Each day, I dedicate myself to improving my skills, currently focusing on mastering Data Structures and Algorithms while also working on exciting projects. When I&apos;m not coding, you&apos;ll find me exploring new destinations, indulging in delicious cuisines, and enjoying music from diverse genres.
          </div>
        </div>
      </div>
      <div className='grad lg:text-4xl text-2xl m-2'> Skills-
        <div className="flex gap-2 flex-wrap">
          <Skills src={c} skillName={"C"}/>
          <Skills src={css} skillName={"CSS"}/>
          <Skills src={html} skillName={"HTML"}/>
          <Skills src={java} skillName={"Java"}/>
          <Skills src={js} skillName={"JavaScript"}/>
          <Skills src={mongo} skillName={"MongoDB"}/>
          <Skills src={ns} skillName={"Node.js"}/>
          <Skills src={react} skillName={"React.js"}/>
          <Skills src={sql} skillName={"SQL"} />
          <Skills src={ts} skillName={"TypeScript"}/>
          <Skills src={cloud} skillName={"CloudFare"}/>
          <Skills src={aws} skillName={"AWS"}/>
        </div>
      </div>
    </div>
  );
}
