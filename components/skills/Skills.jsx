import Image from "next/image";
import { useTheme } from "next-themes";
import { MdOutlineLanguage, MdCloud } from "react-icons/md";
import { FaAward, FaTools } from "react-icons/fa";
import { TbTestPipe } from "react-icons/tb"

const Skills = () => {
    const { theme } = useTheme();

    const skillsData = [
        {
          title: "Languages",
          icon: <MdOutlineLanguage />,
          items: [
            {
              img: "/images/frameworks/html.png",
              alt: "html",
              link: "https://html.com/",
            },
            {
              img: "/images/frameworks/css.png",
              alt: "css",
              link: "https://en.wikipedia.org/wiki/CSS",
            },
            {
              img: "/images/frameworks/javascript.png",
              alt: "javascript",
              link: "https://en.wikipedia.org/wiki/JavaScript",
            },
            {
              img: "/images/frameworks/typescript.png",
              alt: "typescript",
              link: "https://www.typescriptlang.org/",
            },
            {
              img: "/images/frameworks/c-sharp.png",
              alt: "c#",
              link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
            },
            {
              img: "/images/frameworks/sql.png",
              alt: "sql",
              link: "https://en.wikipedia.org/wiki/SQL",
            },
            {
              img: "/images/frameworks/python.png",
              alt: "python",
              link: "https://www.python.org/",
            },
          ],
          bg: "#FCF4FF",
        },
        {
          title: "Frameworks",
          icon: <TbTestPipe />,
          items: [
            {
              img: "/images/frameworks/nextjs.png",
              alt: "nextjs",
              link: "https://nextjs.org/",
            },
            {
              img: "/images/frameworks/react.png",
              alt: "react",
              link: "https://react.dev/",
            },
            {
              img: "/images/frameworks/angular.png",
              alt: "angular",
              link: "https://angular.io/",
            },
            {
              img: "/images/frameworks/net.png",
              alt: "net",
              link: "https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet",
            },
            {
              img: "/images/frameworks/tailwind.png",
              alt: "tailwind",
              link: "https://tailwindcss.com/",
            },
            {
              img: "/images/frameworks/prisma.png",
              alt: "prisma",
              link: "https://www.prisma.io/",
            },
            {
              img: "/images/frameworks/nextauth.png",
              alt: "next-auth",
              link: "https://next-auth.js.org/",
            },
            {
              img: "/images/frameworks/trpc.svg",
              alt: "trpc",
              link: "https://trpc.io/",
            },
            {
              img: "/images/frameworks/blazor.png",
              alt: "blazor",
              link: "https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor",
            },
            {
              img: "/images/frameworks/maui.png",
              alt: "maui",
              link: "https://learn.microsoft.com/en-us/dotnet/maui/what-is-maui",
            },
          ],
          bg: "#F3FAFF",
        },
        {
          title: "Tests",
          icon: <FaAward />,
          items: [
            {
              img: "/images/frameworks/nunit.png",
              alt: "nunit",
              link: "https://nunit.org/",
            },
            {
              img: "/images/frameworks/playwright-logo.svg",
              alt: "playwright",
              link: "https://playwright.dev/",
            },
          ],
          bg: "#FEFAF0",
        },
        {
          title: "Cloud Infrastructure",
          icon: <MdCloud />,
          items: [
            {
              img: "/images/frameworks/azure.png",
              alt: "azure",
              link: "https://azure.microsoft.com/en-us",
            },
            {
              img: "/images/frameworks/aws.webp",
              alt: "aws",
              link: "https://aws.amazon.com/",
            },
            {
              img: "/images/frameworks/ggcloud.png",
              alt: "ggcloud",
              link: "https://cloud.google.com/",
            },
          ],
          bg: "#FFF0F8",
        },
        {
          title: "Tools",
          icon: <FaTools />,
          items: [
            {
              img: "/images/frameworks/github.png",
              alt: "github",
              link: "https://github.com/",
            },
            {
              img: "/images/frameworks/vscode.png",
              alt: "vscode",
              link: "https://code.visualstudio.com/",
            },
            {
              img: "/images/frameworks/visual-studio-code.png",
              alt: "visual studio code",
              link: "https://visualstudio.microsoft.com/",
            },
          ],
          bg: "#EEF5FA",
        }
      ];

    return (
    <>
      {skillsData.map((item, key) => (
        <div key={key}>
            <div className="flex items-center space-x-2 mb-4">
                <div className="text-6xl text-[#F95054]">{item.icon}</div>
                <h4 className="text-5xl dark:text-white font-medium">
                {item.title}
                </h4>
            </div>
            <div
                className="flex flex-row flex-wrap py-4 pl-5 pr-3 mb-6 rounded-lg  dark:border-[#212425] dark:border-2"
                style={{
                    background: `${
                        theme === "dark" || theme === undefined ? "#1d1d1d" : item?.bg
                    }`,
                }}
            >
                {item.items.map((singleItem, singleKey) => (
                    <a 
                    href={singleItem.link}
                    target="_blank"
                    key={singleKey}
                    >
                        <Image 
                        alt={singleItem.alt} 
                        className="h-full w-24 p-1 object-fill rounded-lg" 
                        key={singleKey} 
                        src={singleItem.img}
                        width={72}
                        height={72}
                        />
                    </a>
                    
                ))}
                
            </div>
          
        </div>
      ))}
    </>
  );
};

export default Skills;
