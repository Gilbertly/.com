import type { NextPage } from 'next';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

const Home: NextPage = () => {
  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:-z-[1] before:h-full before:w-full before:-translate-x-1/2 before:transform before:bg-top before:bg-no-repeat">
      <div className="mx-auto max-w-[85rem] px-4 pt-24 pb-10 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mx-auto mt-5 max-w-xl text-center">
          <h1 className="block text-4xl font-bold text-gray-800 dark:text-gray-200 md:text-5xl lg:text-6xl">
            👋🏽 Hello
          </h1>
        </div>
        {/* End Title */}

        <div className="mx-auto mt-5 max-w-3xl text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            I'm trying out Tailwind, bio coming soon.
          </p>
        </div>
        {/* Buttons */}
        <div className="mt-8 grid w-full gap-3 sm:inline-flex sm:justify-center">
          <a
            className="inline-flex items-center justify-center gap-x-3 rounded-full border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 py-3 px-4 text-center text-sm font-medium text-white hover:from-violet-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
            href="https://github.com/gilbertly"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubLogoIcon />
            Continue to Github
          </a>
        </div>
        {/* End Buttons */}
      </div>
    </div>
  );
};

export default Home;
