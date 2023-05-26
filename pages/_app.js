import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Layout from "../components/Layout/Layout";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};

storyblokInit({
  accessToken: "HI5LwA7ybDxeH74FQrS55wtt",
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
      <Component {...pageProps} />;
    </Layout>
    </>
  )

}