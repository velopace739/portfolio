const Intro = () => {
  return (
    <>
      <div className="pt-12 md:py-12 px-5 sm:px-7 md:px-10 lg:px-14">
        <h2 id="#home" className="after-effect after:left-52">About Me</h2>
        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center  ">
          <div className="col-span-12 space-y-2.5">
            <div className="lg:mr-16">
              <p className="text-gray-lite  dark:text-color-910 leading-7">
                I&apos;m a Software Engineer with a passion for crafting innovative and efficient solutions. With extensive experience in the software development industry, I have honed my skills and expertise to deliver exceptional results.
              </p>
              <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
              My technical proficiency encompasses multiple programming languages, frameworks, and tools. Whether it&apos;s designing scalable architectures, developing robust applications, or optimizing performance, I thrive on solving complex challenges and producing high-quality software.
              </p>
              <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
              As an experience Software Engineer, I possess strong leadership qualities that enable me to guide and mentor junior team members. I am adept at fostering collaboration, encouraging knowledge sharing, and inspiring a culture of continuous improvement. I understand the value of effective communication and actively engage with stakeholders to ensure project objectives are met.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
