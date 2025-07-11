import { Stack } from "@/data";
import Link from "next/link";

export default function Service() {
  return (
    <div>
      <section id="services" className="py-10">
        <div className="flex justify-center items-center flex-col">
          <p className="text-center font-semibold">My Stacks</p>

          <div className="my-5 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-10">
            {Stack.map((data, idx) => (
              <Link
                href={data.link}
                key={idx}
                className="transition-transform duration-300 hover:scale-105 max-w-[150px] flex flex-col items-center justify-center p-4">
                {data.image}
                <p className="text-sm text-center mt-2">{data.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
