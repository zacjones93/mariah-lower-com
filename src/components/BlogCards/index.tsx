import {Card} from './Card'

export const BlogCards = () => {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Posts
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            From time to time I post nutrition guides, yoga flows, example
            programming, and more! <br />
            Here are some of my favorites:
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          <Card
            imgSrc="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
            alt="desk"
            postType="Nutrition"
            title="Boost your immune system with these foods"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum."
            datePublished="Mar 16, 2020"
            readTime="6"
          />
          <Card
            imgSrc="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
            alt="desk"
            postType="Yoga"
            title="Sunrise flow"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum."
            datePublished="Mar 10, 2020"
            readTime="4"
          />
          <Card
            imgSrc="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
            alt="desk"
            postType="Training"
            title="Improve your handstand in 10 days"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum."
            datePublished="Feb 12, 2020"
            readTime="11"
          />
        </div>
      </div>
    </div>
  )
}
