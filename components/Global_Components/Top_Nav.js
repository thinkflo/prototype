import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Constrained_Width from '../Layout/Constrained_Width'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Top_Nav = ({blok}) => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <Constrained_Width>
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                  <svg className="w-64 h-full" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 419.1 54.1"><path d="M7.4,7.2c4.2-3.3,9.7-4.9,15.7-4.9A43.5,43.5,0,0,1,33.5,3.7a3.2,3.2,0,0,0,1.6.2c.1,1.4.4,5,.8,8.6a1.2,1.2,0,0,1-1.6.1c-.8-4-3.5-8.5-11.9-8.5S5.8,9.8,5.8,21.8s7.8,19.1,17.4,19.1a12.4,12.4,0,0,0,12.2-8.4,1.2,1.2,0,0,1,1.5.3c-.4,3-1.9,6.9-2.8,8a6.6,6.6,0,0,0-2,.6,38.3,38.3,0,0,1-9.3,1.3A26.1,26.1,0,0,1,8.3,38.8,18.7,18.7,0,0,1,0,22.7,19.4,19.4,0,0,1,7.4,7.2Z" fill="#153b8a"/><path d="M43.6,8.8c0-3.4-.1-3.8-1.8-4.8l-.6-.4c-.3-.2-.3-1,0-1.1A50.7,50.7,0,0,0,47.5,0a.7.7,0,0,1,.6.3c-.1,1.8-.2,4.7-.2,7.3V19.9a2.3,2.3,0,0,0,.2,1.1A12.9,12.9,0,0,1,56,17.9c5.6,0,7.6,3.5,7.6,7.6v9.7c0,4.2.1,4.9,2.2,5.1l1.6.2c.4.3.2,1.3-.2,1.4H56c-.4-.1-.6-1.1-.2-1.4l1.2-.2c2.2-.3,2.2-.9,2.2-5.1V26.9c0-3.8-1.8-6.3-5.5-6.3a7.1,7.1,0,0,0-4.6,1.6c-1,.9-1.2,1.2-1.2,3.2v9.8c0,4.2.1,4.8,2.2,5.1l1.2.2c.5.2.3,1.3-.1,1.4H40c-.4-.1-.5-1.1-.1-1.4l1.5-.2c2.1-.2,2.2-.9,2.2-5.1Z" fill="#153b8a"/><path d="M74.6,25c0-2.3,0-2.6-1.6-3.6l-.5-.4a.8.8,0,0,1,.1-1,53.2,53.2,0,0,0,5.9-2.9c.2.1.4.2.4.4v3.4c0,.3.1.5.2.5,2-1.7,4.3-3.5,6.4-3.5a2.4,2.4,0,0,1,2.6,2.4A2.6,2.6,0,0,1,85.6,23a1.8,1.8,0,0,1-1.2-.5,5.8,5.8,0,0,0-2.6-.9,2.3,2.3,0,0,0-2.1,1.2c-.6.8-.8,2.5-.8,4.5v7.9c0,4.2.1,4.9,2.4,5.1l2.1.2c.4.3.3,1.3-.2,1.4H71.4c-.4-.1-.5-1.1-.1-1.4l1.1-.2c2.1-.3,2.2-.9,2.2-5.1Z" fill="#153b8a"/><path d="M94.3,25c0-2.3,0-2.6-1.5-3.6l-.6-.4a.8.8,0,0,1,.1-1,41.2,41.2,0,0,0,6-2.9.5.5,0,0,1,.6.4c-.1,2-.2,4.8-.2,7.2V35.2c0,4.2.1,4.8,2.2,5.1l1.2.2c.4.3.3,1.3-.1,1.4H91c-.4-.1-.5-1.1-.1-1.4l1.2-.2c2.2-.3,2.2-.9,2.2-5.1ZM99.1,6.1a2.8,2.8,0,0,1-3,3,2.9,2.9,0,0,1-3-2.9,3.1,3.1,0,0,1,3.2-3.1A2.8,2.8,0,0,1,99.1,6.1Z" fill="#153b8a"/><path d="M118.9,16.7c-5.2,0-7.4,2.9-7.4,6.4a12.5,12.5,0,0,0,2.2,7l2.9,4.5c2.1,3.3,3.1,6.1,3.1,9.3,0,5.3-3.7,10.2-11.6,10.2h-.5v-.3c5.6-.9,7.7-4.3,7.7-7.7a12.9,12.9,0,0,0-2.4-7.5l-2.8-4.2A14.4,14.4,0,0,1,107,26c0-6.7,5-10.8,11.6-10.8h.7l.9,1.6Z" fill="#153b8a"/><path d="M134.2,21.2c-1,0-1.1.2-1.1,1.4V33.5c0,3.4.4,6.5,4.3,6.5a4.1,4.1,0,0,0,1.6-.3l1.4-.8c.5,0,.7.6.6,1a8,8,0,0,1-6.1,2.7c-5,0-6.1-2.8-6.1-6.3V22.9c0-1.6-.1-1.7-1.2-1.7h-1.7a.9.9,0,0,1-.1-1.2,14,14,0,0,0,3.7-1.8,13.7,13.7,0,0,0,2.5-3.5c.3-.1,1-.1,1.2.3v2.6c0,1.1,0,1.1,1,1.1h6.5a2,2,0,0,1,.1,2.5Z" fill="#153b8a"/><path d="M147.7,25c0-2.3,0-2.6-1.6-3.6l-.5-.4a.7.7,0,0,1,0-1,36.7,36.7,0,0,0,6-2.9c.3,0,.6.1.6.4-.1,2-.2,4.8-.2,7.2V35.2c0,4.2.1,4.8,2.2,5.1l1.2.2a.9.9,0,0,1-.1,1.4h-11c-.4-.1-.5-1.1-.1-1.4l1.3-.2c2.1-.3,2.2-.9,2.2-5.1Zm4.8-18.9a2.9,2.9,0,0,1-3.1,3,2.9,2.9,0,0,1-3-2.9,3.1,3.1,0,0,1,3.2-3.1A2.8,2.8,0,0,1,152.5,6.1Z" fill="#153b8a"/><path d="M171.2,29.7c.8-.3.9-.8.9-1.7V25.3c.1-2.2-.6-5.1-4.3-5.1-1.6,0-3.6.8-3.7,2.6s-.1,1.7-.6,2a6.2,6.2,0,0,1-3.3,1.1.7.7,0,0,1-.8-.8c0-3,6.6-7.2,10.8-7.2s6.3,2.5,6.1,6.9l-.3,10.1c-.2,2.7.4,5.1,2.6,5.1a4.9,4.9,0,0,0,1.5-.3l.8-.4c.2,0,.4.3.4.7a6.2,6.2,0,0,1-4.9,2.6,4.6,4.6,0,0,1-3.8-1.8c-.3-.4-.6-.8-1-.8a8.4,8.4,0,0,0-2.2,1.1,8.9,8.9,0,0,1-4.2,1.5,6,6,0,0,1-4.1-1.4,5.4,5.4,0,0,1-1.8-4c0-2.3,1.1-3.7,4.8-5ZM167.5,40a6.6,6.6,0,0,0,3.6-1.5,3.5,3.5,0,0,0,.8-2.8V32.3c0-.6-.3-.8-.6-.8a13.5,13.5,0,0,0-2.4.6c-3.5,1.2-5.1,2.1-5.1,4.4A3.5,3.5,0,0,0,167.5,40Z" fill="#153b8a"/><path d="M187,25c0-2.3,0-2.6-1.6-3.6l-.5-.4a.7.7,0,0,1,0-1,32.3,32.3,0,0,0,5.9-2.9.6.6,0,0,1,.6.4c-.1,1.4-.1,2.2-.1,2.8s.2.6.7.6c2.4-1.5,5.2-3,8.1-3,4.9,0,6.9,3.4,6.9,7.3v10c0,4.2.1,4.8,2.2,5.1l1.3.2c.4.3.3,1.3-.1,1.4h-11c-.4-.1-.5-1.1-.1-1.4l1.1-.2c2.2-.3,2.2-.9,2.2-5.1V26.5c0-3.3-1.5-5.8-5.4-5.8a6.3,6.3,0,0,0-5,2.1c-.8,1-.9,1.8-.9,3.5v8.9c0,4.2.1,4.8,2.2,5.1l1.1.2c.4.3.3,1.3-.1,1.4H183.7c-.5-.1-.6-1.1-.2-1.4l1.3-.2c2.1-.3,2.2-.9,2.2-5.1Z" fill="#153b8a"/><path d="M227.5,22.9c-2.8,0-3,.1-3,1.9V33c0,6.1.3,7,3.6,7.3l1.7.2c.4.2.2,1.3-.1,1.4H215.5c-.4-.1-.5-1.1-.1-1.4l1-.2c3.2-.6,3.4-1.2,3.4-7.3V12c0-6.2-.5-7.2-3.5-7.4h-1.5c-.4-.2-.2-1.3.1-1.5l7.4.2c2.2,0,4.2,0,6.7-.2.4.2.5,1.3.2,1.5h-1.1c-3.4.4-3.6,1.2-3.6,7.4v6.7c0,1.8.2,1.9,3,1.9h16.7c2.8,0,2.9-.1,2.9-1.9V12c0-6.2-.1-7-3.6-7.4h-1.1c-.3-.2-.2-1.3.1-1.5,2.7.2,4.7.2,7.1.2s4.3,0,6.9-.2c.4.2.5,1.3.1,1.5h-1.2c-3.4.4-3.5,1.2-3.5,7.4V33c0,6.1.1,6.9,3.5,7.3l1.4.2c.3.2.2,1.3-.1,1.4H242.5c-.3-.1-.4-1.1-.1-1.4l1.1-.2c3.6-.5,3.5-1.2,3.6-7.3V24.8c0-1.8-.1-1.9-2.9-1.9Z" fill="#f26921"/><path d="M284.1,30c0,7.3-5,12.6-12.3,12.6s-12-4.7-12-12a12.3,12.3,0,0,1,12.4-12.7A11.7,11.7,0,0,1,284.1,30ZM271.5,19.7c-3.8,0-6.7,3.7-6.7,10.1s2.4,11,7.5,11,6.8-5.3,6.8-9.8S277.1,19.7,271.5,19.7Z" fill="#f26921"/><path d="M291.3,25c0-2.3,0-2.6-1.6-3.6l-.5-.4a.7.7,0,0,1,0-1,40.2,40.2,0,0,0,5.9-2.9c.3.1.5.2.5.4v3.4c0,.3.1.5.2.5,2-1.7,4.2-3.5,6.4-3.5a2.4,2.4,0,0,1,2.6,2.4,2.6,2.6,0,0,1-2.5,2.7,1.9,1.9,0,0,1-1.3-.5,5.4,5.4,0,0,0-2.5-.9,2.3,2.3,0,0,0-2.1,1.2c-.6.8-.8,2.5-.8,4.5v7.9c0,4.2.1,4.9,2.3,5.1l2.1.2c.4.3.3,1.3-.1,1.4H288.1c-.5-.1-.6-1.1-.2-1.4l1.1-.2c2.2-.3,2.3-.9,2.3-5.1Z" fill="#f26921"/><path d="M311.1,25c0-2.3,0-2.6-1.6-3.6L309,21a.8.8,0,0,1,.1-1,41.2,41.2,0,0,0,6-2.9.5.5,0,0,1,.6.4c-.1,2-.2,4.8-.2,7.2V35.2c0,4.2.1,4.8,2.2,5.1l1.2.2c.4.3.3,1.3-.1,1.4h-11c-.4-.1-.5-1.1-.1-1.4l1.2-.2c2.2-.3,2.2-.9,2.2-5.1Zm4.8-18.9a2.8,2.8,0,0,1-3,3,2.9,2.9,0,0,1-3-2.9,3.1,3.1,0,0,1,3.2-3.1A2.8,2.8,0,0,1,315.9,6.1Z" fill="#f26921"/><path d="M328.8,41.8h-6.1a.7.7,0,0,1-.4-.5,91.2,91.2,0,0,0,5.7-8.6l6.1-10.5c1-1.7.6-1.8-.5-1.8h-4c-1.8,0-3.2.2-4,.9a7.3,7.3,0,0,0-2.1,3.4,1,1,0,0,1-1.4-.3,23.8,23.8,0,0,1,1.9-6.8h.7c.2,1,.9,1,4.2,1h11.8a.4.4,0,0,1,.3.6c-1.2,1.7-2.6,3.8-4.3,6.6l-7.1,11.9c-1.2,2.1-1.1,2.3,1.2,2.3h1.9c2.3,0,5.3,0,6.9-1.7a11.7,11.7,0,0,0,1.9-3.4,1,1,0,0,1,1.3.3,19.2,19.2,0,0,1-2.2,6.7H328.8Z" fill="#f26921"/><path d="M369.4,30c0,7.3-5,12.6-12.3,12.6s-12-4.7-12-12a12.3,12.3,0,0,1,12.4-12.7A11.7,11.7,0,0,1,369.4,30ZM356.8,19.7c-3.8,0-6.7,3.7-6.7,10.1s2.4,11,7.5,11,6.8-5.3,6.8-9.8S362.4,19.7,356.8,19.7Z" fill="#f26921"/><path d="M377.6,25c0-2.3,0-2.6-1.6-3.6l-.5-.4a.8.8,0,0,1,.1-1,34.9,34.9,0,0,0,5.8-2.9.9.9,0,0,1,.7.4,17.6,17.6,0,0,0-.2,2.8.7.7,0,0,0,.7.6c2.4-1.5,5.2-3,8.2-3,4.8,0,6.8,3.4,6.8,7.3v10c0,4.2.1,4.8,2.2,5.1l1.3.2c.4.3.3,1.3-.1,1.4H390.1c-.5-.1-.6-1.1-.2-1.4l1.1-.2c2.2-.3,2.3-.9,2.3-5.1V26.5c0-3.3-1.6-5.8-5.5-5.8a6.5,6.5,0,0,0-5,2.1,5.2,5.2,0,0,0-.9,3.5v8.9c0,4.2.2,4.8,2.3,5.1l1,.2c.4.3.3,1.3-.1,1.4H374.3c-.4-.1-.5-1.1-.1-1.4l1.2-.2c2.2-.3,2.2-.9,2.2-5.1Z" fill="#f26921"/><path d="M417.9,16.7c-5.2,0-7.5,2.9-7.5,6.4a11.9,11.9,0,0,0,2.3,7l2.8,4.5c2.1,3.3,3.2,6.1,3.2,9.3,0,5.3-3.8,10.2-11.7,10.2h-.5v-.3c5.6-.9,7.7-4.3,7.7-7.7a12.9,12.9,0,0,0-2.4-7.5L409,34.4a14.4,14.4,0,0,1-3.1-8.4c0-6.7,5.1-10.8,11.6-10.8h.8l.8,1.6Z" fill="#f26921"/></svg>
                </a>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {blok?.content?.Header_Menu.map((item) => (
                      <a
                        key={item._uid}
                        href={item?.Link?.cached_url}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
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
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
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