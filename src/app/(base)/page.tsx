import ContactForm from "@/components/contact-form";
import LandingPage from "@/components/landing-page";
import MaxWidthContainer from "@/components/max-width-container";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <LandingPage />

      <div className="text-center md:-mt-10">
        <h1 className="text-app-clay font-bold text-4xl md:text-8xl lg:tracking-[2.8rem]">
          GLOBAL LEADERS
        </h1>
      </div>

      <MaxWidthContainer className="py-6 md:py-10 flex items-center justify-center">
        <h1 className="text-app-white text-center md:text-left font-bold max-w-[60ch]">
          AS A ONE-STOP SHOP FOR GAMING OPERATORS, WE OFFER A FULL SUITE OF END-
          TO-END PRODUCTS AND SERVICES DESIGNED TO SUPPORT EVERY STAGE OF THE
          BUSINESS LIFECYCLE—FROM MARKET ENTRY AND LICENSING TO OPERATIONS
          MANAGEMENT, COMPLIANCE, AND EXPANSION.
        </h1>
      </MaxWidthContainer>

      <MaxWidthContainer className="grid grid-cols-1 sm:grid-cols-2">
        <div className="hidden sm:block"></div>

        <div>
          <p className="text-app-white text-sm text-center md:text-left">
            Whether you&apos;re launching a new venture or scaling an existing
            one, R360° provides the strategic guidance, technical expertise, and
            operational support you need to thrive.
          </p>

          <div className="relative w-full h-[200px] md:h-[300px] md:my-10 my-6">
            <Image
              src="/img/4.png"
              fill
              className="object-contain"
              alt="whot"
            />
          </div>

          <p className="text-app-white text-sm text-center md:text-left mb-10 mb:mb-0">
            Our team consists of more than 20 full-time professionals with deep
            industry knowledge and regional insights. With headquarters in the
            Philippines and a key office in Hong Kong, we are strategically
            positioned to serve clients throughout Asia, ensuring localized
            support combined with global standards.
          </p>
        </div>
      </MaxWidthContainer>
      {/* Big dice image */}
      {/* <div className="md:block hidden dice w-full h-[550px] mt-16"></div> */}

      <div className="md:block relative w-full h-[600px] lg:mt-16">
        <Image
          src="/img/5.png"
          fill
          className="md:object-contain lg:object-fill"
          alt="player"
        />
      </div>
      <div className="md:hidden relative w-full h-[300px] ">
        <Image
          src="/img/5.png"
          fill
          className="object-contain"
          alt="player"
        />
      </div>

      <div className="lg:paddingY">
        <MaxWidthContainer className="flex flex-col items-center">
          <h1 className="text-app-white font-bold max-w-prose md:mb-4 py-10 text-center md:text-left">
            AT R360°, WE ARE COMMITTED TO BEING YOUR TRUSTED PARTNER IN <br />
            NAVIGATING THE GAMING LANDSCAPE—HELPING YOU MOVE FASTER, SMARTER,
            AND MORE CONFIDENTLY IN SOME OF THE WORLD&apos;S MOST PROMISING
            MARKETS.
          </h1>

          <div className="w-full md:w-6/12 self-end lg:pt-16">
            <ContactForm />
          </div>
        </MaxWidthContainer>
      </div>
    </>
  );
};

export default Home;
