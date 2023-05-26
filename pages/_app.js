import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Layout from "../components/Layout/Layout";
import Hero from "@/components/Content_Blocks/Hero";
import Section_Content_Layout from "@/components/Content_Types/Section_Content_Layout";
import CTA_Section from "@/components/Content_Blocks/CTA_Section";
import Stats_Panels from "@/components/Content_Blocks/Stats_Panels";

const components = {
  Hero,
  Section_Content_Layout,
  CTA_Section,
  Stats_Panels
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
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
    </>
  )

}