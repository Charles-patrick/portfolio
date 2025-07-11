"use client";
import { TypeAnimation } from "react-type-animation";

export default function TypingText() {
  return (
    <TypeAnimation
      sequence={[
        "Basketballer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="text-3xl md:text-5xl font-5xl text-blue-600"
    //   repeat={Infinity}
    />
  );
}
