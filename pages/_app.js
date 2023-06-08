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
import { useEffect } from 'react'
import analytics from '@/utils/analytics'

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
  useEffect(() => {
    analytics.page() 
		// this will fire the Page Track function on every new router change.
  }, [])

  return (
    <>
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
    </>
  )

}