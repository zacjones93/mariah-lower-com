export const Email: any = () => {
  return (
    <div className="bg-white min-w-max max-w-min mx-auto">
      <section className="py-12 px-4 lg:py-16 flex-row grid-cols-1">
        <h2 className="inline text-3xl font-extrabold tracking-tight text-gray-900 sm:block sm:text-4xl">
          If you're interested
        </h2>
        <h2 className=" text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          in improving your health
        </h2>
        <p className=" text-3xl font-extrabold tracking-tight text-green-500 sm:block sm:text-4xl">
          I'm open to talking any time
        </p>
        <form className="mt-8 pb-2 w-screen sm:w-1/2 mx-auto bg-gray-500 rounded-md">
          <div className="justify-center">
            <label htmlFor="name" className="sr-only">
              First Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full px-5 py-3 mt-2 mx-2 placeholder-gray-500 focus:ring-indigo-500 focus:text-green-500
        max-w-xs   border-gray-300 rounded-md"
              placeholder="Enter your name"
            />

            <label htmlFor="emailAddress" className="sr-only">
              Email address
            </label>
            <input
              id="emailAddress"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-5 py-3 mt-2 mx-2 placeholder-gray-500 focus:ring-indigo-500 focus:text-green-500 max-w-xs border-gray-300 rounded-md"
              placeholder="Enter your email"
            />

            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-5 py-3 mt-2 mx-2 placeholder-gray-500 focus:ring-indigo-500 focus:text-green-500 max-w-xs border-gray-300 rounded-md"
              placeholder="Say hi!"
            />

            <button
              type="submit"
              className="w-40 mx-auto flex items-center justify-center my-3 px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}
