import { storyblokEditable } from "@storyblok/react";
import Constrained_Width from "../Layout/Constrained_Width";

const Hero = ({blok}) => {
  return (
    <section className="relative bg-white" {...storyblokEditable(blok)}>
      <Constrained_Width className="lg:grid lg:grid-cols-12 lg:gap-x-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              {blok?.Title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {blok?.Blurb}
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" href={blok?.Link?.[0]?.Link?.cached_url}>{blok?.Link?.[0]?.Title}</a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <picture
						className={`w-full h-full`}>
						<img 
							className={`inset-0 w-full h-full object-cover sm:absolute`}
							src={`${blok?.Image?.filename}`}
							alt={blok?.Image?.alt || `${blok?.Title.replace(/\u2028/g, '')} Hero image`}
							sizes="100vw"
						/>
					</picture>
        </div>
      </Constrained_Width>
    </section>
  )
}

export default Hero;