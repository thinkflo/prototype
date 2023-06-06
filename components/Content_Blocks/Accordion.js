import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Constrained_Width from '../Layout/Constrained_Width'
import { storyblokEditable } from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer'

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]

const Accordion = ({blok}) => {
  const colourSchemes = {
    light: {
      background: "bg-white",
      title: "text-gray-900",
      divider: "divide-gray-900/10",
      panel: {
        title: "text-gray-900",
        blurb: "text-gray-600"
      }
    },
    dark: {
      background: "bg-gray-900",
      title: "text-white",
      divider: "divide-white/10",
      panel: {
        title: "text-white",
        blurb: "text-gray-300"
      }
    },
  }

  return (
    <div className={`${colourSchemes[blok?.Colour_Scheme]?.background || "bg-white"}`} {...storyblokEditable(blok)}>
      <Constrained_Width className="py-24 sm:py-32 lg:py-40">
        <div className={`mx-auto max-w-4xl divide-y ${colourSchemes[blok?.Colour_Scheme]?.divider || "divide-gray-900/10"}`}>
          <h2 className={`text-2xl font-bold leading-10 tracking-tight ${colourSchemes[blok?.Colour_Scheme]?.title || "text-gray-900"}`}>{blok?.Title}</h2>
          <dl className={`mt-10 space-y-6 divide-y ${colourSchemes[blok?.Colour_Scheme]?.divider || "divide-gray-900/10"}`}>
            {blok?.Items?.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  faq?.Title ? 
                  <>
                    <dt>
                      <Disclosure.Button className={`flex w-full items-start justify-between text-left ${colourSchemes[blok?.Colour_Scheme]?.panel.title || "text-gray-900"}`}>
                        <span className="text-base font-semibold leading-7">{faq?.Title}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className={`text-base leading-7 ${colourSchemes[blok?.Colour_Scheme]?.panel.blurb || "text-gray-600"}`}>{render(faq?.Blurb)}</p>
                    </Disclosure.Panel>
                  </>
                  : undefined
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </Constrained_Width>
    </div>
  )
}

export default Accordion;
