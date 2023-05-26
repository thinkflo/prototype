import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Head from "next/head";
 
const Section_Content_Layout = ({ blok, story }) => (
  <>
    <Head>
      <title>{blok?.Title || blok?.Hero?.[0]?.Title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main {...storyblokEditable(blok)}>
        {[  
          ...(blok.Hero ?? []), 
          ...(blok.Content_Blocks ?? [])
        ].map((nestedBlok, index) => (
          <StoryblokComponent {...{blok:nestedBlok, type: blok.component, index}} key={nestedBlok._uid} />
        ))}
    </main>
  </>
);
 
export default Section_Content_Layout;