import {
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaSkype,
} from "react-icons/fa";

const Info = () => {
  const personalContent = [
    // {
    //   border: "border-b border-[#E3E3E3] dark:border-[#3D3A3A]",
    //   icon: <FaMobileAlt />,
    //   iconColor: "text-[#E93B81]",
    //   name: "Phone",
    //   meta: (
    //     <>
    //       <a
    //         className="hover:text-[#FA5252] duration-300 transition"
    //         href="tel:1234567890"
    //       >
    //         123 456 7890
    //       </a>
    //     </>
    //   ),
    // },
    {
      border: "border-b border-[#E3E3E3] dark:border-[#3D3A3A]",
      icon: <FaSkype />,
      iconColor: "text-[#00AFF0]",
      name: "Skype",
      meta: (
        <>
          <a
            className="hover:text-[#FA5252] duration-300 transition"
            href="https://join.skype.com/invite/iL3DXJW1xKaF"
            target="_blank"
          >
            live:.cid.449c3224015102e9
          </a>
        </>
      ),
    },
    {
      border: "border-b border-[#E3E3E3] dark:border-[#3D3A3A]",
      icon: <FaMapMarkerAlt />,
      iconColor: "text-[#6AB5B9] ",
      name: "Location",
      meta: <>Central, Hong Kong</>,
    },
    {
      border: "border-b border-[#E3E3E3] dark:border-[#3D3A3A]",
      icon: <FaEnvelopeOpenText />,
      iconColor: "text-[#FD7590]",
      name: "Email",
      meta: (
        <>
          {" "}
          <a
            className="hover:text-[#FA5252] duration-300 transition"
            href="mailto:velopace7@gmail.com"
          >
            velopace7@gmail.com
          </a>
        </>
      ),
    }
  ];

  return (
    <>
      {personalContent.map((item, key) => (
        <div className={`flex py-2.5 ${item.border}`} key={key}>
          <span
            className={`flex-shrink-0 socialbtn bg-white dark:bg-black ${item.iconColor} shadow-md`}
          >
            {item.icon}
          </span>
          <div className="text-left ml-2.5">
            <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
              {item.name}
            </p>
            <p className="dark:text-white break-all">{item.meta}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Info;
