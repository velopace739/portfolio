import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  const title = "Chris Ma";
  const description = "A seasoned full-stack developer with extensive experience in creating dynamic and responsive web applications. Chris delivers high-performance solutions tailored to meet client needs. Whether you’re seeking freelance collaborations or full-time engagements, Chris is dedicated to helping businesses succeed in the digital landscape.";
  // const image = "/images/about/avatar.jpg";
  const image = "";
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto+Slab:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <title>{title}</title>
        <meta name="description" content={description}/>

        <meta itemProp="name" content={title}/>
        <meta itemProp="description" content={description}/>
        <meta itemProp="image" content={image}/>

        <meta property="og:url" content="https://portofolio-chrisma.vercel.app"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
        <meta property="og:image" content={image}/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={title}/>
        <meta name="twitter:description" content={description}/>
        <meta name="twitter:image" content={image}/>
        <meta content="chris ma, software engineer, full stack developer, chris, velopace7@gmail.com" name="keywords" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}
