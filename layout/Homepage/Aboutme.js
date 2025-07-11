import { Education, Experience } from '@/data';
import { MapPin } from "lucide-react";

export default function Aboutme() {
  return (
    <div>
      <section id="aboutme" className="py-2">
        {/*EMPLOYMENT SECTION*/}
        <section className="py-10">
          <div className="max-w-[900px] mx-auto">
            <p className="font-semibold py-2">Experience</p>

            <div className="flex flex-col justify-center">
              {Experience.map((data, idx) => (
                <div
                  key={idx}
                  className="border-l-[0.1px] border-gray-300 px-5 my-3">
                  <span className="flex gap-x-0.5">
                    {" "}
                    <MapPin /> {data.location}{" "}
                  </span>
                  <span className="flex justify-between items-center">
                    <div className="font-semibold py-1">{data.occupation}</div>{" "}
                    <div>{data.date}</div>
                  </span>
                  <p>{data.position}</p>
                  {data.works && (
                    <ul className="pt-4 px-5">
                      {data.works.map((work, index) => (
                        <li key={index} className="list-disc pt-2">
                          {work}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        {/*EDUCATION SECTION*/}
        <section className="py-10">
          <div className="max-w-[900px] mx-auto">
            <p className="font-semibold py-2">Education</p>

            <div className="flex flex-col justify-center">
              {Education.map((data, idx) => (
                <div
                  key={idx}
                  className="border-l-[0.1px] border-gray-300 px-5 mt-4">
                  <span className="flex gap-x-0.5">
                    {" "}
                    <MapPin /> {data.location}{" "}
                  </span>
                  <span className="flex justify-between items-center">
                    <div className="font-semibold py-1">{data.course}</div>{" "}
                    <div>{data.date}</div>
                  </span>
                  <p>{data.uni}</p>
                  <p className="pt-4">{data.goal}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

