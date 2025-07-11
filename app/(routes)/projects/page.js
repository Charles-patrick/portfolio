import { MyProjects } from "@/data";
import Contact from "@/layout/Homepage/Contact";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-20">
        <p className="font-3xl text-bold">Projects</p>
        {/* CORRECT NAVBAR ISSUES */}
        {MyProjects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col w-full max-w-[500px]   shadow-md rounded-md border my-3 md:my-10">
            <div>
              {project.img && (
                <div className="relative w-full h-100">
                  <Image
                    src={project.img}
                    alt={project.name}
                    fill
                    className="object-cover rounded-t-md "
                    priority
                  />
                </div>
              )}
              <div className="p-4">
                <span className="flex justify-between items-center group">
                  <p>{project.name}</p>
                  <Link href={`/projects/${project.id}`}> 
                    <ArrowRight className="transition-transform duration-300 hover:-rotate-45" />
                  </Link>
                </span>
                <p>{project.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Contact />
    </>
  );
}
