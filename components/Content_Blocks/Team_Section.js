import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import Constrained_Width from "../Layout/Constrained_Width";


const Team_Section = ({blok}) => {
  return (
    <div className="bg-gray-900 py-24 sm:py-32" {...storyblokEditable(blok)}>
      <Constrained_Width>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{blok?.Title}</h2>
          <div className="mt-6 text-lg leading-8 text-gray-300">
            {render(blok?.Blurb)}
          </div>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {blok?.Members.map((person) => (
            <li key={person.uuid}>
              <img className="aspect-[14/13] w-full rounded-2xl object-cover" src={person?.content?.Profile_Image?.filename} alt={person?.content?.Name} />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">{person?.content?.Name}</h3>
              <p className="text-base leading-7 text-gray-300">{person?.content?.Position}</p>
              <p className="text-sm leading-6 text-gray-500">{person?.content?.Location}</p>
            </li>
          ))}
        </ul>
      </Constrained_Width>
    </div>
  )
}

export default Team_Section;