import Head from "next/head";

const Seo = () => {
  const title = "Evans Musonda";
  const description = "A seasoned full-stack developer with extensive experience in creating dynamic and responsive web applications. Evans delivers high-performance solutions tailored to meet client needs. Whether you’re seeking freelance collaborations or full-time engagements, Evans is dedicated to helping businesses succeed in the digital landscape.";
  // const image = "/images/about/avatar.jpg";
  const image = "";
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}/>

      <meta itemProp="name" content={title}/>
      <meta itemProp="description" content={description}/>
      <meta itemProp="image" content={image}/>

      <meta property="og:url" content="https://portfolio-velopace.vercel.app"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:image" content={image}/>

      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content={title}/>
      <meta name="twitter:description" content={description}/>
      <meta name="twitter:image" content={image}/>
    </Head>
  )

};

export default Seo;
