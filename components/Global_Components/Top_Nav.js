import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Constrained_Width from '../Layout/Constrained_Width'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Top_Nav = ({blok}) => {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <Constrained_Width>
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-blue-900 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <a href='/' className="flex flex-shrink-0 items-center">
                    Brown Bag Films
                </a>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {blok?.content?.Header_Menu.map((item) => (
                      <a
                        key={item._uid}
                        href={item?.Link?.cached_url}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-50',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item?.Title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Constrained_Width>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {blok?.content?.Header_Menu?.map((item) => (
                <Disclosure.Button
                  key={item._uid}
                  as="a"
                  href={item?.Link?.cached_url}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.Title}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Top_Nav;