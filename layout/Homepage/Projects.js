import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { MyProjects } from "@/data";

export default function Projects() {
  return (
    <div>
      <section id="projects" className=" pt-10">
        <div className="flex justify-center items-center flex-col mx-auto max-w-[70rem] w-full px-4">
          <div className="py-6">
            <div className="flex justify-between items-center ">
              <div>
                <p className="text-lg font-semibold">Some of My Projects</p>
              </div>
              <div>
                <Link
                  href="/projects"
                  className="flex items-center gap-1  group">
                  View All
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:-rotate-45"
                  />
                </Link>
              </div>
            </div>

            {/*PROJECTS PART*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-[40px]">
              {MyProjects.slice(0, 4).map((data, idx) => (
                <div
                  key={idx}
                  className="w-full sm:w-[290px] lg:w-[400px] shadow-md rounded-md transition-transform duration-300 hover:scale-105">
                  <div className="relative w-full h-45">
                    <Image
                      src={data.img}
                      alt={data.name}
                      fill
                      className="object-cover rounded-t-md "
                      priority
                    />
                  </div>
                  <div className="px-3 py-3">
                    <p className="font-semibold">{data.name}</p>
                    <p>{data.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
