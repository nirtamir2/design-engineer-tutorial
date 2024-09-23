import imageBackgroud from "./snow-board.jpg";
import {useState} from "react";

export default function MyApp() {
  const [state, setState] = useState<"home" | "day">("home");
  return <div className="flex h-full flex-col">
    <h1 className="text-5xl pt-16 px-8">It's going to be a good day</h1>
    <button className="flex-1" type="button">start your day</button>
    <div className="absolute size-full -z-10 grid grid-cols-1 grid-rows-1">
      <div className="size-full col-span-full row-span-full flex pb-16">
    <img
        src={imageBackgroud}
        alt="snow board"
        className="object-cover blur-2xl"
    />
      </div>

    </div>
    <div className="flex gap-2 py-12 px-8">
    <span className="text-5xl">G</span>
    <span>ood morning Time to start another beautiful day</span>
    </div>
  </div>;
}
