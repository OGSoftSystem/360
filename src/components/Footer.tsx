import Link from "next/link";
import MaxWidthContainer from "./max-width-container";
// import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-app-black paddingY">
      <MaxWidthContainer>
        <div className="space-y-4 flex flex-col items-center sm:items-start">
          <Link
            href={"tel:+63285402075"}
            className="text-app-white text-xs md:text-sm"
          >
            +63 (28) 5402-075{" "}
          </Link>

          <Link
            className="text-app-white text-xs md:text-sm"
            href={"mailto:info@resolution360.net"}
          >
            info@resolution360.net
          </Link>
        </div>

        {/* <div className="flex space-x-3 items-center">
          <Link href="/" className="text-app-white">
            Terms
          </Link>
          <div className="size-1 bg-app-white rounded-full" />
          <Link href="/" className="text-app-white">
            Privacy
          </Link>
        </div> */}
      </MaxWidthContainer>
    </footer>
  );
};

export default Footer;
