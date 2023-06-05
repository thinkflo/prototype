import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const CTA_Section = ({blok}) => {
  const colourSchemes = {
    white: {
      background: "bg-white",
      heading: "text-gray-900",
      blurb: "text-gray-600",
      cta: "text-white bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600"
    },
    black: {
      background: "bg-gray-900",
      heading: "text-white",
      blurb: "text-gray-300",
      cta: "text-white bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600"
    },
    purple: {
      background: "bg-indigo-700",
      heading: "text-white",
      blurb: "text-indigo-200",
      cta: "text-indigo-600 bg-white hover:bg-indigo-50 focus-visible:outline-white"
    },
    indigo: {
      background: "bg-indigo-100",
      heading: "text-gray-900",
      blurb: "text-gray-600",
      cta: "text-white bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600"
    }
  }

  return (
    <div className={`${colourSchemes[blok?.Colour_Scheme]?.background || "bg-white"}`} {...storyblokEditable(blok)}>
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${colourSchemes[blok?.Colour_Scheme]?.heading || "text-gray-900"}`}>
            {blok?.Title}
          </h2>
          <div className={`mx-auto mt-6 max-w-xl text-lg leading-8 ${colourSchemes[blok?.Colour_Scheme]?.blurb || "text-gray-600"}`}>
            {render(blok?.Blurb)}
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {blok?.Links?.map(link => {
              return ( 
              <a
                key={link?._uid}
                href={link?.Link?.cached_url}
                className={`rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${colourSchemes[blok?.Colour_Scheme]?.cta || "text-white bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600"}`}
              >
              {link.Title}
            </a>)
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA_Section;