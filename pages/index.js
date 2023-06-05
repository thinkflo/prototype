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
      <StoryblokComponent blok={story.content} />
    </>
  );
}

export async function getStaticProps(context) {
  let slug = "homepage";

  let sbParams = {
    version: "draft", // or 'published'
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
