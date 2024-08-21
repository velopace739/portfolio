import { useTheme } from "next-themes";
import Image from "next/image";

const Service = () => {
  const { theme } = useTheme();

  const serviceData = [
    {
      icon: "/images/icons/icon-1.svg",
      title: "System Design",
      des: "I specialize in simplifying complex challenges through system design.",
      color: "#D566FF",
      bg: "#FCF4FF",
    },
    {
      icon: "/images/icons/icon-6.svg",
      title: "Web Development",
      des: "I have honed my skills to deliver high-quality web solutions that captivate users and meet business objectives.",
      color: "#269FFF",
      bg: "#F3FAFF",
    },
    {
      icon: "/images/icons/icon-2.svg",
      title: "App Development",
      des: "I possess the expertise to create seamless and user-friendly experiences for iOS and Android platforms.",
      color: "#DDA10C",
      bg: "#FEFAF0",
    },
    {
      icon: "/images/icons/icon-5.svg",
      title: "Management",
      des: "I leverage my interpersonal skills to build strong relationships with stakeholders, clients, and team members.",
      color: "#FF75D8",
      bg: "#FFF0F8",
    }
  ];

  return (
    <>
      {serviceData.map((item, key) => (
        <div
          className="about-box dark:bg-transparent"
          key={key}
          style={{
            background: `${theme === "dark" || theme === undefined ? "transparent" : item?.bg}`,
          }}
        >
          <Image
            className="w-10 h-10 object-contain  block"
            src={item.icon}
            width={40}
            height={40}
            alt="icon"
          />

          <div className="space-y-2">
            <h3 className="dark:text-white text-xl font-semibold">
              {item?.title}
            </h3>
            <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
              {item?.des}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Service;
