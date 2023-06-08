import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Layout from "../components/Layout/Layout";
import Hero from "@/components/Content_Blocks/Hero";
import Section_Content_Layout from "@/components/Content_Types/Section_Content_Layout";
import CTA_Section from "@/components/Content_Blocks/CTA_Section";
import Stats_Panels from "@/components/Content_Blocks/Stats_Panels";
import Team_Section from "@/components/Content_Blocks/Team_Section";
import Pricing_Table from "@/components/Content_Blocks/Pricing_Table";
import Feature_Section from "@/components/Content_Blocks/Feature_Section";
import Accordion from "@/components/Content_Blocks/Accordion";
import Script from 'next/script'
import Head from "next/head";

const components = {
  Hero,
  Section_Content_Layout,
  CTA_Section,
  Stats_Panels,
  Team_Section,
  Pricing_Table,
  Feature_Section,
  Accordion
};

storyblokInit({
  accessToken: process.env.ACCESSTOKEN,
  use: [apiPlugin],
  components,
  apiOptions: {
    region: ''
  }
});

export default function App({ Component, pageProps }) {


  return (
    <>
    <Head>
    <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-85JVV1G3YJ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-85JVV1G3YJ');
        `}
      </Script>
    </Head>
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
    </>
  )

}