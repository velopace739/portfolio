import { useTheme } from "next-themes";
import Image from "next/image";

const Address = () => {
  const { theme } = useTheme();

  const addressData = [
    // {
    //   id: "01",
    //   icon: "/images/contact/phone-call 1.png",
    //   title: "Phone ",
    //   info: (
    //     <>
    //       <p>
    //         <a
    //           href="tel:+123 456 7890"
    //           className="text-gray-lite text-lg dark:text-[#A6A6A6] "
    //         >
    //           123 456 7890
    //         </a>
    //       </p>
    //     </>
    //   ),
    //   bg: "#FCF4FF",
    // },
    {
      id: "01",
      icon: "/images/contact/skype.png",
      title: "Skype ",
      info: (
        <>
          <p>
            <a
              href="https://join.skype.com/invite/ki3cmadpqE1O"
              className="hover:text-[#FA5252] duration-300 transition text-gray-lite text-lg dark:text-[#A6A6A6]"
              target="_blank"
            >
              live:.cid.449c3224015102e9
            </a>
          </p>
        </>
      ),
      bg: "#FCF4FF",
    },
    {
      id: "02",
      icon: "/images/contact/email 1.png",
      title: "Email ",
      info: (
        <>
          <p>
            <a
              href="mailto:velopace7@gmail.com"
              className="text-gray-lite text-lg dark:text-[#A6A6A6] "
            >
              velopace7@gmail.com
            </a>
          </p>
        </>
      ),
      bg: "#EEFBFF",
    },
    {
      id: "03",
      icon: "/images/contact/map 1.png",
      title: "Address ",
      info: (
        <p className="text-gray-lite text-lg dark:text-[#A6A6A6] ">
          Winnipeg, Canada
        </p>
      ),
      bg: "#F2F4FF",
    },
  ];

  return (
    <>
      {addressData.map((item, i) => (
        <div
          key={i}
          style={{
            background: `${theme === "dark" ? "#212425" : item?.bg}`,
          }}
          className="flex flex-wrap dark:bg-transparent p-[30px]  border-[#A6A6A6] gap-2 rounded-xl "
        >
          <span className="w-8 mt-2">
            <Image
              src={item.icon}
              width={30}
              height={20}
              alt="icon"
              className="text-4xl dark:text-white"
            />
          </span>
          <div className="space-y-2">
            <p className="text-xl font-semibold dark:text-white">
              {item?.title} :
            </p>
            {item?.info}
          </div>
        </div>
      ))}
    </>
  );
};

export default Address;
