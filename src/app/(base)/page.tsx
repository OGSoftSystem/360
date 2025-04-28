import ContactPage from "@/components/contact-page";
import LandingPage from "@/components/landing-page";
import MaxWidthContainer from "@/components/max-width-container";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <LandingPage />

      <div className="text-center md:-mt-10">
        <h1 className="text-app-clay font-bold text-5xl md:text-8xl lg:tracking-[2.8rem]">
          GLOBAL LEADERS
        </h1>
      </div>

      <MaxWidthContainer className="py-14 flex items-center justify-center">
        <h1 className="text-app-white text-center md:text-left font-bold max-w-prose">
          AS A ONE-STOP SHOP FOR GAMING OPERATORS, WE OFFER A FULL SUITE OF END-
          TO-END PRODUCTS AND SERVICES DESIGNED TO SUPPORT EVERY STAGE OF THE
          BUSINESS LIFECYCLE—FROM MARKET ENTRY AND LICENSING TO OPERATIONS
          MANAGEMENT, COMPLIANCE, AND EXPANSION.
        </h1>
      </MaxWidthContainer>

      <MaxWidthContainer className="grid grid-cols-1 sm:grid-cols-2 space-y-4">
        <div className="hidden sm:block"></div>
        <div>
          <p className="text-app-white text-center md:text-left">
            Whether you&apos;re launching a new venture or scaling an existing
            one, R360° provides the strategic guidance, technical expertise, and
            operational support you need to thrive.
          </p>

          <div className="relative w-full md:w-[300px] h-[300px]">
            <Image
              src="/img/whot.png"
              fill
              className="object-contain"
              alt="whot"
            />
          </div>

          <p className="text-app-white text-center md:text-left">
            Our team consists of more than 20 full-time professionals with deep
            industry knowledge and regional insights. With headquarters in the
            Philippines and a key office in Hong Kong, we are strategically
            positioned to serve clients throughout Asia, ensuring localized
            support combined with global standards.
          </p>
        </div>
      </MaxWidthContainer>
      <div className="dice relative w-full h-[550px] mt-20"></div>

      <div className="contact-image md:paddingY">
        <MaxWidthContainer>
          <h1>
            AT R360°, WE ARE COMMITTED TO BEING YOUR TRUSTED PARTNER IN
            NAVIGATING THE GAMING LANDSCAPE—HELPING YOU MOVE FASTER, SMARTER,
            AND MORE CONFIDENTLY IN SOME OF THE WORLD&apos;S MOST PROMISING
            MARKETS.
          </h1>
          <div className="flex md:justify-end">
            <ContactPage />
          </div>
        </MaxWidthContainer>
      </div>
    </>
  );
};

export default Home;
