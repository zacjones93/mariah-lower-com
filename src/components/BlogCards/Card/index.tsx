export const Card = (props: any) => {
  const {
    imgSrc,
    alt,
    postType,
    title,
    description,
    datePublished,
    readTime,
  } = props

  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={imgSrc} alt={alt} />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-green-500">
            <a href="#" className="hover:underline">
              {postType}
            </a>
          </p>
          <a href="#" className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">{title}</p>
            <p className="mt-3 text-base text-gray-500">{description}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="ml-3">
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime="2020-03-16">{datePublished}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{readTime} min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
