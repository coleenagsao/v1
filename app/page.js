import Image from "next/image";
import { Hero, About, Skills, Experiences } from './components/sections';

export default function Home() {
  return (
    <div className="bg-gray-950">
        <Hero/>
        <About/>
        <Skills/>
        <Experiences/>/
    </div>

  );
}
