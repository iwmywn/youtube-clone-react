import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

export default function Popup() {
  const [display, setDisplay] = useState<boolean>(true);
  return (
    display && (
      <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-black/50 text-base">
        <div className="relative rounded-2xl bg-secondary p-8 text-primary">
          <div className="flex flex-col items-center justify-center gap-1">
            <a
              href="https://github.com/iwmywn/youtube-clone-react"
              target="_blank"
            >
              <FaGithub fontSize={25} />
            </a>
            <span className="text-red-600">
              This source code is for educational purposes only.
            </span>
          </div>
          <div
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full hover:bg-accent/55"
            onClick={() => setDisplay(false)}
          >
            <IoCloseOutline fontSize={25} className="cursor-pointer" />
          </div>
        </div>
      </div>
    )
  );
}
