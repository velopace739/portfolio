const Footer = () => {
  return (
    <footer className="overflow-hidden rounded-b-2xl bg-slate-50 dark:bg-black">
      <div className="container">
        <p className="text-center py-6 text-gray-lite  dark:text-color-910 ">
          &copy; {new Date().getFullYear()} All Rights Reserved by{" "}
          <a
            className="hover:text-[#FA5252] duration-300 transition"
            href="https://www.linkedin.com/in/duy-lan-le-445262163/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chris Ma
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
