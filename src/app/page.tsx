import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

export default function Component() {
  return (
    <div className="relative w-full max-w-3xl mx-auto items-center py-20 px-6 md:px-8 lg:px-12 rounded-3xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2c3e50] to-[#4ca1af] blur-[100px]" />
      <div className="relative z-10 flex flex-col items-center text-center space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-4xl font-bold text-white">Gilbert Gathara</h1>
          <p className="text-lg text-gray-300">Senior Fullstack & Team Lead Engineer</p>
        </div>
        <p className="max-w-md text-gray-300">
          Experienced frontend developer with a passion for creating beautiful and user-friendly web
          applications. Proficient in React, JavaScript, and CSS.
        </p>
        <div className="flex items-center space-x-4">
          <a
            className="text-gray-300 hover:text-white transition-colors duration-300"
            href="https://github.com/gilbertly"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubLogoIcon className="w-6 h-6" />
          </a>
          <a
            className="text-gray-300 hover:text-white transition-colors duration-300"
            href="https://www.linkedin.com/in/gilbert-gathara/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedInLogoIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
