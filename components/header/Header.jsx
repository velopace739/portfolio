import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose, AiFillDatabase } from "react-icons/ai";
import { useState } from "react";
import DarkMode from "../mode/DarkMode";
import DarkModeMobile from "../mode/DarkModeMobile";
import { isActiveLink } from "../../utilis/linkActiveChecker";
import { useRouter } from "next/router";
import { ScrollTo } from "../../utilis/scrollTo";
import { CgNotes } from "react-icons/cg";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const headerMenu = [
    {
      name: "About",
      routePath: "#home",
      icon: <AiFillDatabase />,
    },
    {
      name: "Resume",
      routePath: "#resume",
      icon: <CgNotes />,
    },
    {
      name: "Skills",
      routePath: "#skill",
      icon: <GiSkills />,
    },
    {
      name: "Works",
      routePath: "#project",
      icon: <FiCodesandbox />,
    },
    {
      name: "Contact",
      routePath: "#contact",
      icon: <RiContactsBookLine />,
    },
  ];

  const goTo = (id) => {
    ScrollTo(id);
    setMenuOpen(false);
  }

  return (
    <div className="container w-full bg-[#F3F6F6] dark:bg-black lg:bg-transparent lg:dark:bg-transparent flex justify-between py-5  lg:px-0 lg:pt-[50px]">
      <div className="w-full flex justify-between h-full px-4">

        <a className="my-auto ">
          <Image
            className="h-[64px] lg:h-[64px] m-auto"
            width={214}
            height={64}
            priority
            src="/images/logo/logo.svg"
            alt="logo"
          />
        </a>
        <div className="flex items-center">
          <DarkMode />
          <DarkModeMobile />
          {!menuOpen ? (
            <span
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:opacity-0 lg:invisible visible opacity-100  bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center cursor-pointer items-center text-white dark:text-white text-3xl ml-3 "
            >
              <AiOutlineMenu />
            </span>
          ) : (
            <span
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:opacity-0 cursor-pointer lg:invisible visible opacity-100  bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center items-center text-white text-3xl ml-3 "
            >
              <AiOutlineClose />
            </span>
          )}
        </div>
      </div>

      <nav className={`${menuOpen ? "block lg:hidden" : "hidden"}`}>
        <ul
          className={`${
            menuOpen
              ? "block  rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#212425]"
              : "flex my-12 "
          }`}
        >
          {headerMenu.map((item, key) => (
            <li key={key} className="mb-1">
              <a
                className={`${
                  isActiveLink(item.routePath, router.asPath)
                    ? "rounded-md  cursor-pointer font-poppins bg-white text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 px-2 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:text-[#A6A6A6] text-white linked bg-gradient-to-r "
                    : "rounded-md  cursor-pointer font-poppins bg-white text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 px-2 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:text-[#A6A6A6]"
                } `}
                onClick={() => goTo(item.routePath)}
              >
                <span className="mr-2 text-xl">{item.icon}</span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
