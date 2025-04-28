import MaxWidthContainer from "./max-width-container";
import Image from "next/image";

const LandingPage = () => {
  return (
    <MaxWidthContainer className="paddingY">
      <div className="hidden md:block home-card h-fit md:-mt-10 pb-24">
        <h1 className="title z-10">
          FULL SERVICE <br />
          CONSULTANCY
          <br /> COMPANY FOR <br /> THE GAMING <br />
          INDUSTRY
        </h1>
      </div>

      {/* SMALL SCREEN */}
      <div className="md:hidden home-card h-[350px] flex items-center justify-center">
        <h1 className="title z-10 text-center">
          FULL SERVICE <br />
          CONSULTANCY
          <br /> COMPANY FOR <br /> THE GAMING <br />
          INDUSTRY
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:-mt-10">
        <div className="hidden md:flex items-center justify-center">
          <Image
            src="/img/counter.png"
            width={100}
            height={100}
            alt="counter"
            className="object-contain"
            priority
          />
        </div>

        <div className="space-y-4 md:w-[40ch] text-center md:text-left">
          <h2 className="text-app-white font-bold tracking-wide">
            R360° IS A FULL-SERVICE CONSULTANCY FIRM DEDICATED TO SUPPORTING THE
            GROWTH AND SUCCESS OF THE GAMING INDUSTRY.
          </h2>

          <p className="text-app-white tex t-base">
            With a strong focus on emerging markets across Central and Southeast
            Asia. We specialize in delivering comprehensive solutions tailored
            to the unique challenges and opportunities within these dynamic
            regions.
          </p>

          <div className="relative w-full md:w-[250px] h-[250px]">
            <Image
              src="/img/sm-dice.png"
              fill
              alt="counter"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default LandingPage;
