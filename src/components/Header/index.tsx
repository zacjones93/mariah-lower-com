export const Header = () => {
  return (
    <div className="mt-3 md:flex md:items-center md:justify-between bg-gray-600">
      <div className="flex min-w-0">
        <img
          className="inline-block h-14 w-15 "
          src="https://res.cloudinary.com/dpspogkzf/image/upload/v1608414621/mariah-lower/kettlebell_sw2kpr.jpg"
          alt="kettlebell drawing"
        />
        <h2 className="ml-3 text-2xl font-bold leading-7 pt-4 text-green-500 sm:text-4xl sm:truncate">
          Mariah Lower
        </h2>
      </div>
      <div className="mt-4 flex md:mt-0 md:ml-4">
        <a className="ml-3 sm:text-base inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900  hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          About
        </a>
        <a className="ml-3 sm:text-base inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Training
        </a>
        <a
          className="ml-3 mr-3 sm:text-base inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 hover:bg-green-500
         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Nutrition
        </a>
      </div>
    </div>
  )
}
