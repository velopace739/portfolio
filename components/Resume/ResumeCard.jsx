import { useTheme } from "next-themes";
import { MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";

const ResumeCard = () => {
  const { theme } = useTheme();

  const resumeData = [
    {
      title: "Education",
      icon: <MdOutlineBusinessCenter />,
      items: [
        {
          id: 1,
          date: "2012-2016",
          title: "Bachelor of Engineering - BE",
          place: "The University of Hong Kong",
          bg: "#FFF4F4",
        },
      ],
    },
    {
      title: "Experience",
      icon: <MdOutlineSchool />,
      items: [
        {
          date: "JAN 2017 - DEC 2019",
          title: "Software Developer",
          place: "WeDigitify",
          bg: "#F2F4FF",
        },
        {
          date: "JAN 2020 - DEC 2021",
          title: "Backend Developer",
          place: "Infosys",
          bg: "#EEF5FA",
        },
        {
          date: "JAN 2022 - OCT 2023",
          title: "Full Stack Developer",
          place: "Educative",
          bg: "#F2F4FF",
        },
        {
          date: "NOV 2023 - Present",
          title: "Senior Software Engineer",
          place: "Self Employed",
          bg: "#EEF5FA",
        },
      ],
    }
  ];

  return (
    <>
      {resumeData.map((item, key) => (
        <div key={key}>
          <div className="flex items-center space-x-2 mb-4">
            <div className="text-6xl text-[#F95054]">{item.icon}</div>
            <h4 className="text-5xl dark:text-white font-medium">
              {item.title}
            </h4>
          </div>

          {item.items.map((singleItem, singleKey) => (
            <div
              className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  dark:border-[#212425] dark:border-2"
              style={{
                background: `${
                  theme === "dark" ? "transparent" : singleItem?.bg
                }`,
              }}
              key={singleKey}
            >
              <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                {singleItem.date}
              </span>
              <h3 className="text-xl dark:text-white"> {singleItem.title} </h3>
              <p className="dark:text-[#b7b7b7]">{singleItem.place}</p>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default ResumeCard;
