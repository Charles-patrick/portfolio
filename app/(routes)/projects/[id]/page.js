"use client";
import { MyProjects } from "@/data";
import Contact from "@/layout/Homepage/Contact";
import { useParams } from "next/navigation";
export default function page() {
  const params = useParams();
  const param = params.id;
  return (
    <>
      <div className="flex flex-col justify-center items-center py-20">
        {/* My id is {param} */}
        {MyProjects.filter((id) => id.id === param).map((project) => (
          <div key={project.id}>
            <p className="text-3xl font-bold text-center"> {project.name}</p>
            <img src={project.img} alt={project.name} className="rounded-md" />
          </div>
        ))}
      </div>
      <Contact />
    </>
  );
}
