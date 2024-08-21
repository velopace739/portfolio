import Head from "next/head";

const Seo = () => {
  const title = "Chris Ma - Software Engineer Portfolio";
  const description = "I'm Chris Ma and a Software Engineer";
  const image = "/images/about/avatar.jpg";
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}/>

      <meta itemprop="name" content={title}/>
      <meta itemprop="description" content={description}/>
      <meta itemprop="image" content={image}/>

      <meta property="og:url" content="https://portfolio-chrisma.vercel.app"/>
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
