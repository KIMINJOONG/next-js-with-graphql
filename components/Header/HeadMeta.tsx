import Head from "next/head";
import React from "react";

interface IHeadMeta {
  title?: string
}

const HeadMeta = ({ title }: IHeadMeta) => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={"나빌레라"} key="og:title" />
      <meta property="og:url" content={"og:url"} key="og:url" />
      <meta property="og:description" content={"og:description"} key="og:description" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      {/* <meta name="msapplication-TileImage" content="https://d4x5yybe1iyrp.cloudfront.net/public/assets/images/bo_favi/ms-icon-144x144.png" /> */}
      <meta name="theme-color" content="#ffffff" />
      <title>{title ? title : "나빌레라"}</title>
      {/* <link rel="shortcut icon" href="https://d4x5yybe1iyrp.cloudfront.net/public/assets/images/bo_favi/favicon.ico" />
      <link rel="apple-touch-icon" sizes="57x57" href="https://d4x5yybe1iyrp.cloudfront.net/public/assets/images/bo_favi/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="https://d4x5yybe1iyrp.cloudfront.net/public/assets/images/bo_favi/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="https://d4x5yybe1iyrp.cloudfront.net/public/assets/images/bo_favi/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="https://d4x5yybe1iyrp.cloudfront.net/public/assets/images/bo_favi/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="https://d4x5yybe1iyrp.cloudfront.net/public/assets/images/bo_favi/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="https://d4x5yybe1iyrp.cloudfront.net/public/assets/images/bo_favi/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="https://d4x5yybe1iyrp.cloudfront.net/public/assets/images/bo_favi/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="https://d4x5yybe1iyrp.cloudfront.net/public/assets/images/bo_favi/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="https://d4x5yybe1iyrp.cloudfront.net/public/assets/images/bo_favi/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="https://d4x5yybe1iyrp.cloudfront.net/public/assets/images/bo_favi/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="https://d4x5yybe1iyrp.cloudfront.net/public/assets/images/bo_favi/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="https://d4x5yybe1iyrp.cloudfront.net/public/assets/images/bo_favi/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="https://d4x5yybe1iyrp.cloudfront.net/public/assets/images/bo_favi/favicon-16x16.png" /> */}
      {/* <link rel="manifest" href="/manifest.json" /> */}
    </Head>
  );
};

export default HeadMeta;
