import Head from "next/head";

import {
	useStoryblokState,
	getStoryblokApi,
	StoryblokComponent,
} from "@storyblok/react";

export default function Page({ story, preview }) {
	story = useStoryblokState(story, {}, preview);

	return (
		<>
			{story?.content ? (
				<StoryblokComponent
					blok={story && story.content}
					{...{ story, preview }}
				/>
			) : undefined}
		</>
	);
}

export async function getStaticProps(context) {
	let slug = context.params.slug ? context.params.slug.join("/") : "";

	let sbParams = {
		version: "published", // or 'draft'
		resolve_relations: [
			"Section_Navigator.Parent_Section",
			"Team_Section.Members"
		],
	};

	if (context.preview) {
		sbParams.version = "draft";
	}

	const sleep = (ms) => {
		return new Promise((resolve) => setTimeout(resolve, ms));
	};

	const getSectionChildren = async (story) => {
		const storyblokApi = getStoryblokApi();
		const parents = story?.content?.Content_Blocks?.filter(
			(blok) => blok.component === "Section_Navigator"
		);
		const sectionChildren = {};
		return await Promise.allSettled(
			parents.map(async (parent) => {
				const {
					data: { stories },
				} = await storyblokApi.get(
					`cdn/stories?starts_with=${parent.Parent_Section?.full_slug}&level=${
						parent.Parent_Section?.full_slug.split("/").length
					}&per_page=100&page=1`,
					sbParams
				);

				let paths = [];
				Object.keys(stories).forEach((linkKey) => {
					paths.push({
						id: stories[linkKey].id,
						real_path:
							stories[linkKey].content.component === "Resource_Details"
								? stories[linkKey].content.Link.url
								: stories[linkKey].full_slug,
						name: stories[linkKey].name,
					});
				});

				sectionChildren[parent.Parent_Section.uuid] = paths ?? undefined;
				await sleep(167); //Maximum 6 API Requests per second
			})
		).then(() => sectionChildren);
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

	const blokData = {
		sectionChildren: Boolean(
			story?.content?.Content_Blocks?.filter(
				(blok) => blok.component === "Section_Navigator"
			).length
		)
			? await getSectionChildren(story)
			: null,
	};

	return {
		props: {
			...{ story: { ...story, ...blokData } },
			...{ topNav },
			...{ footer },
			...{ preview: context.preview ?? false },
		},
		revalidate: 3600,
	};
}

export async function getStaticPaths() {
	const storyblokApi = getStoryblokApi();
	let { data } = await storyblokApi.get(
		"cdn/links/?version=published&filter_query[is_folder][in]=false"
	);

	let paths = [];
	const skipSlugs = [
		"homepage",
	];

	const skipMatches = [
    "global-components/",
  ]

	Object.keys(data.links).forEach((linkKey) => {
		if (
			data.links[linkKey].is_folder ||
			Boolean(
				skipMatches.filter((url) => data.links[linkKey].slug.includes(url))
					.length
			) ||
			skipSlugs.indexOf(data.links[linkKey].slug) > -1
		) {
			return;
		}

		const slug = data.links[linkKey].slug;
		let splittedSlug = slug.split("/");
		paths.push({ params: { slug: splittedSlug } });
	});

	return {
		paths: paths,
		fallback: false,
	};
}
