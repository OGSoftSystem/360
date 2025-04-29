"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import MaxWidthContainer from "./max-width-container";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
// import Socials from "./Socials";

// const menus = [
//   { path: "/", title: "Home" },
//   { path: "/about", title: "About" },
//   { path: "/contact-us", title: "Contact" },
//   // { path: "/auth/sign-in", title: "Login" },
// ];

const Header = () => {
  const [showBtn, setShowBtn] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <MaxWidthContainer className="flex items-center justify-center  py-4">
        <Link
          href={"/"}
          className="relative w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px]"
        >
          <Image
            src="/img/logo.png"
            fill
            alt="logo"
            className="object-contain"
          />
        </Link>

        {/* <div className="flex-[0.4] flex justify-center">
          <DesktopNavbar />
        </div> */}

        {/* <div className="md:hidden justify-end">
          <ArrowLeft className="text-app-white" />
        </div> */}

        {/* <MobileNavbar setToggle={setToggle} onClick={() => setToggle(false)} /> */}

        {/* Scroll to top */}
        <div
          className={cn(
            "size-8 hidden items-center justify-center rounded-full fixed bottom-5 right-5 bg-primary/70 hover:bg-primary font-bold font-rubik cursor-pointer z-30",
            showBtn && "flex"
          )}
          onClick={scrollToTop}
        >
          <ArrowUp className="w-6 text-white" />
        </div>
      </MaxWidthContainer>
    </header>
  );
};

export default Header;

// const DesktopNavbar = () => {
//   return (
//     <nav className="space-x-8 hidden md:block">
//       {menus.map((menu) => {
//         return (
//           <NavItem key={menu.title} href={menu.path}>
//             {menu.title}
//           </NavItem>
//         );
//       })}
//     </nav>
//   );
// };

// const MobileNavbar = ({
//   onClick,
//   setToggle,
// }: {
//   onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
//   setToggle: React.Dispatch<React.SetStateAction<boolean>>;
// }) => {
//   // const { data: session } = useSession();
//   return (
//     <nav className="flex flex-col space-y-6 absolute top-14 left-0 right-0 bg-card h-screen animate-slide-down p-4 z-50">
//       {menus.map((menu) => {
//         return (
//           <NavItem onClick={onClick} key={menu.title} href={menu.path}>
//             {menu.title}
//           </NavItem>
//         );
//       })}
//       {true ? (
//         <NavItem href={"/auth/sign-in"}>LogIn</NavItem>
//       ) : (
//         <div
//           onClick={async () => {
//             setToggle(false);
//             // await signOutUser();
//           }}
//           className="text-muted-foreground font-rubik ml-2"
//         >
//           Logout
//         </div>
//       )}
//     </nav>
//   );
// };

// const NavItem = (props: Omit<ComponentProps<typeof Link>, "className">) => {
//   const pathname = usePathname();

//   return (
//     <Link
//       {...props}
//       className={cn(
//         "py-2 mx-2 hover:text-primary text-muted-foreground font-rubik font-[400]",
//         props.href === pathname && "border-b-4 border-primary w-fit",
//         props.href === pathname && "hover:text-muted-foreground"
//       )}
//     >
//       {props.children}
//     </Link>
//   );
// };
