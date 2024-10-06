//import Image from "next/image";
import TextMask from "@/components/TextMask";

export default function Home() {
  return (
  <div className="flex-wrap justify-center black:invert">
    <TextMask image="/name.jpg" text="Jackson Kelly" className="h-96 w-full" />
    <h4 className="text-slate-300">Aspiring Full-Stack Developer</h4>
  </div>);
}
