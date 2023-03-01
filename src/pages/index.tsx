import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:-z-[1] before:h-full before:w-full before:-translate-x-1/2 before:transform before:bg-top before:bg-no-repeat">
      <div className="mx-auto max-w-[85rem] px-4 pt-24 pb-10 sm:px-6 lg:px-8">
        {/* Announcement Banner */}
        <div className="flex justify-center">
          <a
            className="inline-flex items-center gap-x-2 rounded-full border border-gray-200 bg-white p-2 px-3 text-xs text-gray-600 transition hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600"
            href="#"
          >
            Explore the Capital Productt
            <span className="flex items-center gap-x-1">
              <span className="border-l border-gray-200 pl-2 text-blue-600 dark:text-blue-500">
                Explore
              </span>
              <svg
                className="h-2.5 w-2.5 text-blue-600"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </a>
        </div>
        {/* End Announcement Banner */}

        {/* Title */}
        <div className="mx-auto mt-5 max-w-xl text-center">
          <h1 className="block text-4xl font-bold text-gray-800 dark:text-gray-200 md:text-5xl lg:text-6xl">
            Supercharged Preline Experience
          </h1>
        </div>
        {/* End Title */}

        <div className="mx-auto mt-5 max-w-3xl text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Preline is a large open-source project, crafted with Tailwind CSS
            framework by Hmlstream.
          </p>
        </div>
        {/* Buttons */}
        <div className="mt-8 grid w-full gap-3 sm:inline-flex sm:justify-center">
          <a
            className="inline-flex items-center justify-center gap-x-3 rounded-full border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 py-3 px-4 text-center text-sm font-medium text-white hover:from-violet-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
            href="#"
          >
            <svg
              className="w-4.5 h-4.5"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            Continue with Github
          </a>
        </div>
        {/* End Buttons */}
      </div>
    </div>
  );
};

export default Home;
