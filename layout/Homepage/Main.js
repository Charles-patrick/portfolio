import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import TypingText from "@/components/typingtext";

export default function Main() {
  return (
    <div>
      <section
        id="home"
        className="flex justify-center items-center min-h-screen ">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1200px] w-full mx-auto items-center px-4 gap-6 pt-[50px]">
          <div className="flex justify-center h-[300px] md:h-auto">
            <Image
              src="/user3.jpg"
              alt=""
              width={300}
              height={100}
              className="object-cover rounded-md w-full max-w-[300px] h-full"
            />
          </div>
          <div>
            <div>
              <p className="text-3xl md:text-5xl">
                {" "}
                Hi ,I`m Lebron James , a <TypingText />
              </p>
              <span className="flex gap-1 py-5">
                <MapPin /> Nigeria
              </span>
              <p>
                {" "}
                I build beautiful, responsive websites that combine sleek
                design with smooth user experience — turning ideas into
                pixel-perfect interfaces.
              </p>
              <Link href="/" className="hover:underline py-5">
                Download CV
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
