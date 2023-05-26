import { storyblokEditable } from "@storyblok/react";
import Constrained_Width from "../Layout/Constrained_Width";
import { render } from "storyblok-rich-text-react-renderer";


const stats = [
  { id: 1, name: 'Creators on the platform', value: '8,000+' },
  { id: 2, name: 'Flat platform fee', value: '3%' },
  { id: 3, name: 'Uptime guarantee', value: '99.9%' },
  { id: 4, name: 'Paid out to creators', value: '$70M' },
]

const Stats_Panels = ({blok}) => {
  const colourSchemes = {
    light: {
      background: "bg-white",
      title: "text-gray-900",
      blurb: "text-gray-600",
      panel: {
        background: "bg-gray-400/5",
        blurb: "text-gray-600",
        value: "text-gray-900"
      }
    },
    dark: {
      background: "bg-gray-900",
      title: "text-white",
      blurb: "text-gray-300",
      panel: {
        background: "bg-white/5",
        blurb: "text-gray-300",
        value: "text-white"
      }
    },
  }
  
  return (
    <div className={`${colourSchemes[blok?.Colour_Scheme]?.background || "bg-gray-900"} py-24 sm:py-32`} {...storyblokEditable(blok)}>
      <Constrained_Width className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className={`text-3xl font-bold tracking-tight  sm:text-4xl ${colourSchemes[blok?.Colour_Scheme]?.title || "text-white"}`}>{blok?.Title}</h2>
            <div className={`mt-4 text-lg leading-8 ${colourSchemes[blok?.Colour_Scheme]?.blurb || "text-gray-300"}`}>
              {render(blok?.Blurb)}
            </div>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {blok?.Panels?.map((stat) => (
              <div key={stat._uid} className={`flex flex-col p-8 ${colourSchemes[blok?.Colour_Scheme]?.panel?.background || "bg-white/5"}`}>
                <dt className={`text-sm font-semibold leading-6 ${colourSchemes[blok?.Colour_Scheme]?.panel?.blurb || "text-gray-300"}`}>{stat.Blurb}</dt>
                <dd className={`order-first text-3xl font-semibold tracking-tight ${colourSchemes[blok?.Colour_Scheme]?.panel?.value || "text-white"}`}>{stat.Value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Constrained_Width>
    </div>
  )
}

export default Stats_Panels;