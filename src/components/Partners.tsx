import Wowbii from "/public/partners/wowbii.png";
import EnuguMinstry from "/public/partners/enugu-me.png";
import Evergreen from "/public/partners/evergreen.png";
import Educare from "/public/partners/educare.png";
import Image from "next/image";

const Partners = () => {
  const partners = [Wowbii, EnuguMinstry, Evergreen, Educare];
  return (
    <section
      id="partners"
      className="mx-auto w-full max-w-7xl px-5 py-36 sm:px-10"
    >
      <div>
        <h2 className="mb-8 text-3xl md:text-4xl text-center font-semibold  text-dark md:mb-12 lg:text-5xl">
          Sponsors
        </h2>
        <div className="relative h-16 md:h-20 lg:h-24 overflow-x-clip !overflow-hidden">
          <div className="absolute bottom-2 top-2 flex items-center animate-marquee gap-8 md:gap-16 pr-8">
            {partners.map((partner, index) => (
              <div key={index} className="overflow-clip h-full w-max">
                <Image
                  src={partner}
                  alt="partner"
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
          <div className="absolute bottom-2 top-2 flex animate-marquee2 gap-8 md:gap-16 pr-8">
            {partners.map((partner, index) => (
              <div key={index} className="overflow-clip h-full w-max">
                <Image
                  src={partner}
                  alt="partner"
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
          <div className="fade-left" />
          <div className="fade-right" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
