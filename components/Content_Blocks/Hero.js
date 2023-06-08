import { storyblokEditable } from "@storyblok/react";
import Constrained_Width from "../Layout/Constrained_Width";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]


const Hero = ({blok}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    blok?.Layout === "Simple centered with background image" ? 
    <div className="bg-gray-900" {...storyblokEditable(blok)}>
      <div className="relative isolate overflow-hidden pt-14">
        <img
          src={`${blok?.Image?.filename}`}
          alt={blok?.Image?.alt || `Hero image`}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className="absolute inset-x-0 top-0 -z-10 h-full overflow-hidden bg-black opacity-30"
          aria-hidden="true"
        >
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {blok?.Title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {blok?.Blurb}
            </p>
            {blok?.Link?.[0]?.Title ? 
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href={blok?.Link?.[0]?.Link?.cached_url}
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  {blok?.Link?.[0]?.Title}
                </a>
              </div>
            : undefined}
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
    :
    blok?.Layout === "Simple centered" ?
    <div className="relative isolate px-6 pt-14 lg:px-8 overflow-y-hidden" {...storyblokEditable(blok)}>
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {blok?.Title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {blok?.Blurb}
          </p>
          {blok?.Link?.[0]?.Title ? 
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href={blok?.Link?.[0]?.Link?.cached_url}
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                {blok?.Link?.[0]?.Title}
              </a>
            </div>
          : undefined}
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
    : 
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
            {blok?.Link?.length ? 
              <div className="mt-10 flex items-center gap-x-6">
                <a className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" href={blok?.Link?.[0]?.Link?.cached_url}>{blok?.Link?.[0]?.Title}</a>
              </div>
            : undefined}
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