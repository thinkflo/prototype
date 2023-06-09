import Head from "next/head";


import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Home({ story, preview }) {
  story = useStoryblokState(story, {}, preview);

  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />				        
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Non-Profit, Charitable Organization | Christian Horizons"/>
        <meta property="og:url" content="https://christianhorizons.org/"/>
        <meta property="og:description" content="Nurturing communities of belonging since 1965."/>
        <meta property="description" content="Nurturing communities of belonging since 1965."/>

        <meta name="twitter:site" content="@chorizons"/>
        <meta name="twitter:creator" content="@chorizons"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Non-Profit, Charitable Organization | Christian Horizons"/>
        <meta name="twitter:url" content="https://christianhorizons.org/"/>
        <meta name="twitter:description" content="Nurturing communities of belonging since 1965."/>

        <meta property="og:image" content=""/>
        <meta name="twitter:image:src" content=""/>

        <title>Non-Profit, Charitable Organization | Christian Horizons</title>

        <meta name='robots' content='noindex, nofollow' />

        <meta name="description" content="As a non-profit, developmental services organization, Christian Horizons helps people experiencing disabilities accomplish their goals &amp; thrive in communities." />
        <link rel="canonical" href="https://christianhorizons.org/" />
        <meta property="og:locale" content="en-CA" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Non-Profit, Charitable Organization | Christian Horizons" />
        <meta property="og:description" content="As a non-profit, developmental services organization, Christian Horizons helps people experiencing disabilities accomplish their goals &amp; thrive in communities." />
        <meta property="og:url" content="https://christianhorizons.org/" />
        <meta property="og:site_name" content="ChristianHorizons" />
        <meta property="article:modified_time" content="2023-03-08T19:14:17+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>    
      <StoryblokComponent blok={story.content} />
    </>
  );
}

export async function getStaticProps(context) {
  let slug = "homepage";

  let sbParams = {
    version: "draft", // or 'published'
    resolve_relations: [
			"Team_Section.Members"
		],
  };

  const storyblokApi = getStoryblokApi();
  const {
		data: { story },
	} = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
	const {
		data: { story: topNav },
	} = await storyblokApi.get("cdn/stories/global-components/top-navigation");
	const {
		data: { story: footer },
	} = await storyblokApi.get("cdn/stories/global-components/footer");

  return {
    props: {
			...{ story: { ...story } },
			...{ topNav },
			...{ footer },
			...{ preview: context.preview ?? false },
		},
    revalidate: 3600,
  };
}
