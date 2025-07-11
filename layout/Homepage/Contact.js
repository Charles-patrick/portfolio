import { ContactForm } from '@/components/example-form';
import { Socials } from '@/data';

export default function Contact() {
  return (
    <>
      <section id="contact" className="">
        <div className="py-10">
          <div className="max-w-[900px] mx-auto">
            <p className="font-semibold py-3">Let`s Talk</p>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-[300px] md:h-[450px] flex flex-col justify-between py-[3px] md:py-[60px]">
                {Socials.map((data, idx) => (
                  <div
                    className="py-2 px-3 border-l-[0.1px] border-gray-300   "
                    key={idx}>
                    <p className="font-semibold pb-1">{data.social} :</p>
                    {data.links?.map((link, idx) => (
                      <span key={idx}>
                        <a href={link.href} className="flex gap-2 pt-1">
                          {link.icon} {link.info}
                        </a>
                      </span>
                    ))}
                  </div>
                ))}
              </div>
              <div>
                <p className="font-semibold py-2">Reach Out</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
