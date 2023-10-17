import Constrained_Width from "../Layout/Constrained_Width"

const Footer = ({ blok }) => {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Constrained_Width className="pb-8 pt-16 sm:pt-24 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">


            <p className="text-sm leading-6 text-gray-300">
            Brown Bag Labs is an exciting online space where we share great content for families as well as behind the scenes fun and tutorials from the Brown Bag Films team.
            </p>
            <div className="flex space-x-6">
              {blok?.content?.Socials?.map((item) => (
                <a key={item.Title} href={item?.Link?.cached_url}>
                  <span className="sr-only">{item.Title}</span>
                  <img alt={item.Title} src={item?.Icon?.filename} className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                {blok?.content?.Solutions?.map((item) => (
                    <li key={item._uid}>
                      <a href={item?.Link?.cached_url || "#"} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.Title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                {blok?.content?.Support?.map((item) => (
                    <li key={item._uid}>
                      <a href={item?.Link?.cached_url || "#"} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.Title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {blok?.content?.Company?.map((item) => (
                    <li key={item._uid}>
                      <a href={item?.Link?.cached_url || "#"} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.Title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                {blok?.content?.Legal_Menu?.map((item) => (
                    <li key={item._uid}>
                      <a href={item?.Link?.cached_url || "#"} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.Title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">&copy; 2023 Brown Bags Films. All rights reserved.</p>
        </div>
      </Constrained_Width>
    </footer>
  )
}

export default Footer
