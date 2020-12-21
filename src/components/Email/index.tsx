import {useState, createRef} from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

const signUpURL =
  'https://mariahlower.us7.list-manage.com/subscribe/post?u=9069f120e7988f441e57a2f3a&amp;id=38cf29bbdc'

export const Email: any = () => {
  const emailRef = createRef(undefined)
  const nameRef = createRef(undefined)
  const messageRef = createRef(undefined)

  return (
    <div className="bg-white min-w-max max-w-min mx-auto">
      <section className="py-12 sm:px-4 lg:py-16 grid-cols-1">
        <div className="flex flex-col w-full ml-1  max-w-xs sm:max-w-lg">
          <h2
            className="
            text-3xl
            sm:w-max
            font-extrabold
            tracking-tight
            text-gray-900
            sm:text-4xl"
          >
            If you're interested in improving your health
          </h2>
          <p className="text-3xl font-extrabold tracking-tight text-green-500 sm:block sm:text-4xl">
            I'm open to talking any time
          </p>
        </div>
        <MailchimpSubscribe
          url={signUpURL}
          render={({subscribe, status, message}) => {
            switch (status) {
              case 'sending':
                return <div>Sending...</div>
              case 'success':
                return <div>Subscribed.</div>
              case 'error':
                return <div dangerouslySetInnerHTML={{__html: message}} />
              default:
                return (
                  <form
                    onSubmit={() => {
                      event.preventDefault()
                      alert(
                        JSON.stringify({
                          EMAIL: emailRef.current.value,
                          NAME: nameRef.current.value,
                          MESSAGE: messageRef.current.value,
                        }),
                      )
                      subscribe({
                        EMAIL: emailRef.current.value,
                        NAME: nameRef.current.value,
                        MESSAGE: messageRef.current.value,
                      })
                    }}
                    className="mt-8 py-2 w-screen max-w-sm sm:max-w-none sm:w-1/2 sm:mx-auto bg-gray-500 rounded-md"
                  >
                    <div className="justify-center">
                      <label htmlFor="name" className="sr-only">
                        First Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        ref={nameRef}
                        className="mx-7 w-10/12 px-3 py-3 mt-2 justify-center   placeholder-gray-500 focus:ring-indigo-500 focus:text-green-500
              border-gray-300 rounded-md"
                        placeholder="Enter your name"
                      />

                      <label htmlFor="emailAddress" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="emailAddress"
                        name="email"
                        type="email"
                        ref={emailRef}
                        autoComplete="email"
                        required
                        className="mx-7 w-10/12 px-3 py-3 mt-2 justify-center  placeholder-gray-500 focus:ring-indigo-500 focus:text-green-500 max-w-xs border-gray-300 rounded-md"
                        placeholder="Enter your email"
                      />

                      <label htmlFor="message" className="sr-only">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        ref={messageRef}
                        className="mx-7 w-10/12 justify-center px-5 py-3 mt-2 placeholder-gray-500 focus:ring-indigo-500 focus:text-green-500 max-w-xs border-gray-300 rounded-md"
                        placeholder="Say hi!"
                      />

                      <button
                        type="submit"
                        value="subscribe"
                        className="w-40 mx-auto flex items-center justify-center my-3 px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                )
            }
          }}
        />
      </section>
    </div>
  )
}
