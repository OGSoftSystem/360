import MaxWidthContainer from "./max-width-container";
import Image from "next/image";

const LandingPage = () => {
  return (
    <MaxWidthContainer className="paddingY mt-10 sm:mt-0">
      <div className="hidden md:block home-card lg:h-[calc(100vh-14vh)] md:-mt-10 pb-28">
        <h1 className="title z-10">
          FULL SERVICE <br />
          CONSULTANCY
          <br /> COMPANY FOR <br /> THE GAMING <br />
          INDUSTRY
        </h1>
      </div>

      {/* SMALL SCREEN */}
      <div className="md:hidden home-card h-[350px] -mt-16 flex items-center justify-center">
        <h1 className="title z-10 text-center">
          FULL SERVICE <br />
          CONSULTANCY
          <br /> COMPANY FOR <br /> THE GAMING <br />
          INDUSTRY
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:-mt-12 lg:-mt-34">
        <div className="hidden md:flex items-center justify-center">
          <Image
            src="/img/2.png"
            width={100}
            height={100}
            alt="counter"
            className="object-contain"
            priority
          />
        </div>

        <div className="space-y-4 md:w-[40ch] md:pr-4 lg:pr-0 text-center md:text-left">
          <h2 className="text-app-white font-bold tracking-wide">
            R360° IS A FULL-SERVICE CONSULTANCY FIRM DEDICATED TO SUPPORTING THE
            GROWTH AND SUCCESS OF THE GAMING INDUSTRY.
          </h2>

          <p className="text-app-white text-base">
            With a strong focus on emerging markets across Central and Southeast
            Asia. We specialize in delivering comprehensive solutions tailored
            to the unique challenges and opportunities within these dynamic
            regions.
          </p>

          <div className="relative w-full h-[250px]">
            <Image
              src="/img/3.png"
              fill
              alt="counter"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default LandingPage;
