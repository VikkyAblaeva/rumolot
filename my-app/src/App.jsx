import './input.css';
import './App.css';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const solutions = [
  {
    name: 'Оборудование',
    description: 'Мы соберем любой комплект по индивидуальному заказу с учетом всех скидок.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Заготовки',
    description: 'Заготовки для чеканки монет выполнены из латуни, меди и алюминия.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  { name: 'Капсулы и футляры', description: "Здесь будет описание раздела.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Клише',
    description: "Мы можем изготовить клише по индивидуальному дизайну.",
    href: '#',
    icon: Squares2X2Icon,
  },
  {
    name: 'Одежда и декор',
    description: 'Здесь будет описание раздела.',
    href: '#',
    icon: ArrowPathIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon }, // иконки play и telephone
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Монеты на заказ',
    description: 'За короткие сроки мы изготовляем монеты большим тиражом.',
    href: '#',
    icon: LifebuoyIcon,
  },
  {
    name: 'Готовые монеты',
    description: 'Мы занимаемся продажей готовых сувенирных монет.',
    href: '#',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Сувенирная подкова',
    description: 'Из нашей новой серии вы можете заказать клише для чеканки подков, заготовки - подковы и готовые подковы.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Сувенирные монеты "Москва" и "Санкт-Петербург"',
    description: 'Мы решили запустить первую серию монет и магнитов с изображениями достопримечательностей городов Москвы и Санкт-Петербурга.',
    href: '#',
    icon: ShieldCheckIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function App() {
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-10xl px-9">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href='https://rumolot.ru/oborudovanie-dlya-chekanki-monet/'>
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-1200' : 'text-gray-900',
                      'group inline-flex items-center rounded-md bg-white text-2xl font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:ring-offset-2'
                    )}
                  >
                    <span>Оборудование</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-1200' : 'text-gray-900',
                        'ml-2 h-5 w-5 group-hover:text-gray-900'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-900" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-2xl font-medium text-gray-1200">{item.name}</p>
                                <p className="mt-1 text-2xl text-gray-900">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a href="https://rumolot.ru/oborudovanie-dlya-chekanki-monet/" className="text-2xl font-medium text-gray-900 hover:text-gray-1200">
              Мастер-классы
            </a>
            <a href="https://rumolot.ru/oborudovanie-dlya-chekanki-monet/" className="text-2xl font-medium text-gray-900 hover:text-gray-1200">
              Портфолио
            </a>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-1200' : 'text-gray-900',
                      'group inline-flex items-center rounded-md bg-white text-2xl font-medium hover:text-gray-1200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    )}
                  >
                    <span>Монеты на заказ</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-1200' : 'text-gray-900',
                        'ml-2 h-5 w-5 group-hover:text-gray-900'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-900" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-2xl font-medium text-gray-1200">{item.name}</p>
                                <p className="mt-1 text-2xl text-gray-900">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a href="https://rumolot.ru/oborudovanie-dlya-chekanki-monet/" className="whitespace-nowrap text-2xl font-medium text-gray-900 hover:text-gray-1200">
              Sign in
            </a>
            <a
              href="https://rumolot.ru/oborudovanie-dlya-chekanki-monet/"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-2xl font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-900 hover:bg-gray-100 hover:text-gray-1200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-900" aria-hidden="true" />
                      <span className="ml-3 text-2xl font-medium text-gray-1200">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="https://rumolot.ru/oborudovanie-dlya-chekanki-monet/" className="text-2xl font-medium text-gray-1200 hover:text-gray-900">
                  Pricing
                </a>

                <a href="https://rumolot.ru/oborudovanie-dlya-chekanki-monet/" className="text-2xl font-medium text-gray-1200 hover:text-gray-900">
                  Docs
                </a>
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-2xl font-medium text-gray-1200 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href="https://rumolot.ru/oborudovanie-dlya-chekanki-monet/"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-2xl font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-2xl font-medium text-gray-500">
                  Existing customer?{' '}
                  <a href="https://rumolot.ru/oborudovanie-dlya-chekanki-monet/" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default App;
