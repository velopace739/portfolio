const Intro = () => {
  return (
    <>
      <div className="pt-12 md:py-12 px-5 sm:px-7 md:px-10 lg:px-14">
        <h2 id="#home" className="after-effect after:left-52">About Me</h2>
        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center  ">
          <div className="col-span-12 space-y-2.5">
            <div className="lg:mr-16">
              <p className="text-gray-lite  dark:text-color-910 leading-7">
                Experienced Full-Stack Developer with over 6 years of expertise in designing and building scalable web applications and blockchain solutions. Proficient in Node.js, React, Next.js, and Web3.js, with a strong focus on developing NFT marketplaces, smart contracts, and decentralized applications (DApps).
              </p>
              <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                Demonstrated success in creating seamless user experiences, integrating blockchain technologies, and optimizing performance for high-traffic platforms. Adept at front-end and back-end development, API integration, and implementing secure smart contracts using Solidity and Ethereum standards like ERC-721 and ERC-1155.
              </p>
              <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                Skilled in collaborating with cross-functional teams to deliver innovative solutions, driving the adoption of cutting-edge technologies in the web3 ecosystem. Passionate about solving complex problems and continuously learning emerging technologies to stay ahead in the rapidly evolving blockchain industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
