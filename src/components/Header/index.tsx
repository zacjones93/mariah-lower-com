import NextLink from 'next/link'

export const Header = () => {
  return (
    <div className="md:flex md:items-center md:justify-between bg-gray-600">
      <div className="flex min-w-0">
        <img
          className="inline-block h-14 w-15 "
          src="https://res.cloudinary.com/dpspogkzf/image/upload/v1608414621/mariah-lower/kettlebell_sw2kpr.jpg"
          alt="kettlebell drawing"
        />
        <NextLink href="/">
          <h2 className="ml-3 items-baseline font-bold leading-7 pt-7 sm:pt-6 text-green-500 text-4xl sm:truncate cursor-pointer align-bottom">
            Mariah Lower
          </h2>
        </NextLink>
      </div>
      <div className="mt-4 pb-2 flex md:mt-0 md:ml-4 justify-center">
        <NextLink href="/about">
          <a
            className="ml-3 sm:text-base inline-flex items-center px-4 mt-1 pt-3 pb-2 border border-transparent rounded-md shadow-sm text-sm font-medium
         text-gray-900  hover:bg-green-500    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            About
          </a>
        </NextLink>
        <a className="ml-3 sm:text-base inline-flex items-center px-4 mt-1 pt-3 pb-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Training
        </a>
        <a
          className="ml-3 mr-3 sm:text-base inline-flex items-center px-4 mt-1 pt-3 pb-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 hover:bg-green-500
         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Nutrition
        </a>
      </div>
    </div>
  )
}
