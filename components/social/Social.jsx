import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const Social = () => {
  const socialContent = [
    // {
    //   link: "https://github.com/velopace739",
    //   icon: <FaGithub />,
    //   iconClass: "",
    // },
    {
      link: "https://www.linkedin.com/in/evansmjr7",
      icon: <FaLinkedinIn />,
      iconClass: "text-[#0072b1]",
    },
    {
      link: "https://x.com/velopace7",
      icon: <FaTwitter />,
      iconClass: "",
    },
  ];

  return (
    <>
      {socialContent.map((item, key) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={key}
        >
          <span className={`socialbtn ${item.iconClass}`}>{item.icon}</span>
        </a>
      ))}
    </>
  );
};

export default Social;
