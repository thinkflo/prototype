import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import Constrained_Width from '../Layout/Constrained_Width'
import { render } from 'storyblok-rich-text-react-renderer'
import { storyblokEditable } from '@storyblok/react'

const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]

const colourSchemes = {
  light: {
    background: "bg-white",
    title: "text-gray-900",
    blurb: "text-gray-600",
    panel: {
      title: "text-gray-900",
      blurb: "text-gray-600",
      value1: "text-gray-900",
      value2: "text-gray-600",
      features: "text-gray-600",
      ring: "ring-gray-200",
      cta: "text-indigo-600 ring-indigo-200 hover:ring-indigo-300 ring-1 ring-inset"
    }
  },
  dark: {
    background: "bg-gray-900",
    title: "text-white",
    blurb: "text-gray-300",
    panel: {
      title: "text-white",
      blurb: "text-gray-300",
      value1: "text-white",
      value2: "text-white",
      features: "text-white",
      ring: "ring-white/10",
      cta: "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white"
    }
  },
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Pricing_Table = ({blok}) => {
  const [frequency, setFrequency] = useState(frequencies[0])

  return (
    <div className={`${colourSchemes[blok?.Colour_Scheme]?.background || "bg-white"} py-24 sm:py-32`} {...storyblokEditable(blok)}>
      <Constrained_Width>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className={`mt-2 text-4xl font-bold tracking-tight sm:text-5xl ${colourSchemes[blok?.Colour_Scheme]?.title || "text-gray-900"}`}>
            {blok?.Title}
          </h2>
        </div>
        <div className={`mx-auto mt-6 max-w-2xl text-center text-lg leading-8 ${colourSchemes[blok?.Colour_Scheme]?.blurb || "text-gray-600"}`}>
          {render(blok?.Blurb)}
        </div>
        <div className="mt-16 flex justify-center">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
          >
            <RadioGroup.Label className="sr-only">Payment frequency</RadioGroup.Label>
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(
                    checked ? `${blok?.Colour_Scheme === "light" ? "bg-indigo-600 text-white" : "bg-indigo-500 text-white"}` : `${blok?.Colour_Scheme === "light" ? "text-gray-500" : "text-white"}`,
                    'cursor-pointer rounded-full px-2.5 py-1'
                  )
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blok?.Panels?.map((tier, index) => (
            <div
              {...storyblokEditable(tier)}
              key={tier._uid}
              className={classNames(
                tier.mostPopular || index == 1 ? 'ring-2 ring-indigo-600' : `ring-1 ${colourSchemes[blok?.Colour_Scheme]?.rind || "ring-gray-200"}`,
                'rounded-3xl p-8 xl:p-10'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier._uid}
                  className={classNames(
                    tier.mostPopular || index == 1 ? `${blok?.Colour_Scheme === "light" ? "text-indigo-600" : blok?.Colour_Scheme === "dark" ? "text-white" : "text-indigo-600"}` : `${colourSchemes[blok?.Colour_Scheme]?.panel?.title || "text-gray-900"}`,
                    'text-lg font-semibold leading-8'
                  )}
                >
                  {tier.Title}
                </h3>
                {tier.mostPopular || index == 1 ? (
                  <div className={`rounded-full px-2.5 py-1 text-xs font-semibold leading-5 ${blok?.Colour_Scheme === "light" ? "text-indigo-600 bg-indigo-600/10" : "bg-indigo-500 text-white"}`}>
                    Most popular
                  </div>
                ) : null}
              </div>
              <div className={`mt-4 text-sm leading-6 ${colourSchemes[blok?.Colour_Scheme]?.panel?.blurb || "text-gray-600"}`}>{render(tier?.Blurb)}</div>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className={`text-4xl font-bold tracking-tight ${colourSchemes[blok?.Colour_Scheme]?.panel?.value1 || "text-gray-900"}`}>{`$${frequency.value === "monthly" ? tier?.Amount_Monthly : tier?.Amount_Annualy}`}</span>
                <span className={`text-sm font-semibold leading-6 ${colourSchemes[blok?.Colour_Scheme]?.panel?.value2 || "text-gray-600"}`}>{frequency?.priceSuffix}</span>
              </p>
              <a
                href={tier?.Link?.cached_url}
                aria-describedby={tier._uid}
                className={classNames(
                  tier.mostPopular || index == 1
                    ? `${blok?.Colour_Scheme === "light" ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500" : "bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500"}`
                    : `${colourSchemes[blok?.Colour_Scheme]?.panel?.cta || "text-indigo-600 ring-indigo-200 hover:ring-indigo-300 ring-1 ring-inset"}`,
                  'cursor-pointer mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                Buy plan
              </a>
              <ul role="list" className={`mt-8 space-y-3 text-sm leading-6 xl:mt-10 ${colourSchemes[blok?.Colour_Scheme]?.panel?.features || "text-gray-600"}`}>
                {tier?.Features?.map((feature) => (
                  <li key={feature._uid} className="flex gap-x-3">
                    <CheckIcon className={`h-6 w-5 flex-none ${blok?.Colour_Scheme === "light" ? "text-indigo-600" : blok?.Colour_Scheme === "light" ? "text-white" : "text-indigo-600"} `} aria-hidden="true" />
                    {feature?.Title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Constrained_Width>
    </div>
  )
}

export default Pricing_Table;