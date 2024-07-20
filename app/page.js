import Image from "next/image";
import { Hero, About } from './components/sections';

export default function Home() {
  return (
    <div className="bg-gray-950">
        <Hero/>
        <About/>

    </div>

  );
}
