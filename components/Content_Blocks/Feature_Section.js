import Constrained_Width from '../Layout/Constrained_Width';
import { storyblokEditable } from '@storyblok/react';
import { render } from 'storyblok-rich-text-react-renderer';

const Feature_Section = ({blok}) => {
  const colourSchemes = {
    light: {
      background: "bg-white",
      subtitle: "text-gray-900",
      blurb: "text-gray-600",
      panel: {
        title: "text-gray-900",
        blurb: "text-gray-600",
      }
    },
    dark: {
      background: "bg-gray-900",
      subtitle: "text-white",
      blurb: "text-gray-300",
      panel: {
        title: "text-white",
        blurb: "text-gray-300",
      }
    },
  }

  return (
    <div className={`${colourSchemes[blok?.Colour_Scheme]?.background || "bg-gray-900"} py-24 sm:py-32`} {...storyblokEditable(blok)}>
      <Constrained_Width>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className={`text-base font-semibold leading-7 text-indigo-400`}>{blok?.Title}</h2>
          <p className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${colourSchemes[blok?.Colour_Scheme]?.subtitle || "text-white"}`}>
            {blok?.Subtitle}
          </p>
          <div className={`mt-6 text-lg leading-8 ${colourSchemes[blok?.Colour_Scheme]?.blurb || "text-gray-300"}`}>
            {render(blok?.Blurb)}
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {blok?.Features.map((feature) => (
              <div key={feature._uid} className="flex flex-col" {...storyblokEditable(feature)}>
                <dt className={`flex items-center gap-x-3 text-base font-semibold leading-7 ${colourSchemes[blok?.Colour_Scheme]?.panel.title || "text-white"}`}>
                  <img className="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" src={feature?.Icon?.filename} />
                  {feature.Title}
                </dt>
                <dd className={`mt-4 flex flex-auto flex-col text-base leading-7 ${colourSchemes[blok?.Colour_Scheme]?.panel.blurb || "text-gray-300"}`}>
                  <p className="flex-auto">{feature.Blurb}</p>
                  <p className="mt-6">
                    <a href={feature?.Link?.[0]?.Link?.cached_url} className={`text-sm font-semibold cursor-pointer leading-6 text-indigo-400`}>
                      {feature?.Link?.[0]?.Title} <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Constrained_Width>
    </div>
  )
}

export default Feature_Section;
