import React from "react";

const ContactPage = () => {
  return (
    <div className="w-full">
      <div className="bg-[#f0f0f0] py-14">
        <div className="text-center">
          <h2 className="text-[#7a462a] text-3xl sm:text-5xl text-center mt-14 uppercase">
            CONTACT US
          </h2>
          <p className="mb-4 text-[#b95a26]">KEEP IN TOUCH</p>
        </div>
        <div className="mx-auto flex w-10/12 flex-col overflow-hidden rounded-lg bg-white shadow-md lg:w-8/12 lg:flex-row">
          <div className="w-full py-16 px-12 lg:w-1/2">
            <form action="#">
              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border-bottom border-gray-400 py-1 px-2"
                />
              </div>
              <div className="mt-5">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border-bottom border-gray-400 py-1 px-2"
                />
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border-bottom border-gray-400 py-1 px-2"
                />
              </div>
              <div className="mt-5">
                <textarea
                  type="text"
                  placeholder="Your Message"
                  className="w-full border-bottom border-gray-400 py-1 px-2"
                />
              </div>
              <div className="mt-5"></div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="w-[100px] bg-blue-400 py-3 text-center text-white"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>

          <div className="flex w-full flex-col justify-center p-12 lg:w-1/2 gap-y-6">
            <div className="flex gap-x-2">
              <svg
                color="#5a3725"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clip-rule="evenodd"
                />
              </svg>
              <a href="tell:+8801622544585">+880-1622544585</a>
            </div>

            <div className="flex gap-x-2">
              <svg
                color="#5a3725"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>

              <a href="mailto:nokibul.alam002@gmail.com">
                nokibul.alam002@gmail.com
              </a>
            </div>

            <div className="flex gap-x-2">
              <svg
                color="#5a3725"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path d="M15.75 8.25a.75.75 0 01.75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 11-.992-1.124A2.243 2.243 0 0015 9a.75.75 0 01.75-.75z" />
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM4.575 15.6a8.25 8.25 0 009.348 4.425 1.966 1.966 0 00-1.84-1.275.983.983 0 01-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 012.328-.377L16.5 15h.628a2.25 2.25 0 011.983 1.186 8.25 8.25 0 00-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.575 15.6z"
                  clip-rule="evenodd"
                />
              </svg>

              <a href="www.ayeshalthr.com" target="_blank">
                www.ayeshalthr.com
              </a>
            </div>

            <div className="flex gap-x-2">
              <svg
                color="#5a3725"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                />
              </svg>

              <p>1 No SonatonGhor, Tennarymor, Zigatola, Dhaka</p>
            </div>

            <div className="flex gap-x-2">
              <svg
                color="#5a3725"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
                <path
                  fill-rule="evenodd"
                  d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z"
                  clip-rule="evenodd"
                />
              </svg>

              <p>34 Hemayetpur, Savar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
