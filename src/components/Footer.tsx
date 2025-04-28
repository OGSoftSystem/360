import Link from "next/link";
import MaxWidthContainer from "./max-width-container";
// import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-app-black paddingY">
      <MaxWidthContainer className="flex justify-between">
        <div className="my-4">
          <p className="text-app-white md:text-xl">+1 (xxx) xxx-xxxx </p>
          <Link
            className="text-app-white md:text-xl"
            href={"mailto:info@R360consulting.com"}
          >
            info@R360consulting.com
          </Link>
        </div>

        <div className="flex space-x-3 items-center">
          <p className="text-app-white">Terms</p>
          <div className="size-1 bg-app-white rounded-full" />
          <p className="text-app-white">Privacy</p>
        </div>
      </MaxWidthContainer>
    </footer>
  );
};

export default Footer;
