import { useState, useEffect } from 'react';
import { Outlet, HeadContent, Scripts, createRootRoute } from '@tanstack/react-router';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import '@/styles/globals.css';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Gilbert Gathara' },
      { name: 'description', content: 'Senior Full-Stack Engineer and Technical Team Lead' },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
      },
      { rel: 'icon', href: '/favicon.ico' },
    ],
    scripts: [
      {
        children: `(function(){try{var d=document.documentElement;var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){d.classList.add('dark')}}catch(e){}})()`,
      },
    ],
  }),
  component: RootLayout,
});

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="p-2 rounded-md transition-colors duration-200 hover:bg-[var(--color-border)]"
    >
      {dark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
    </button>
  );
}

function RootLayout() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="mx-auto max-w-screen-md px-5 pt-8 pb-16 md:pt-16">
          <header className="flex justify-end mb-12">
            <ThemeToggle />
          </header>
          <main>
            <Outlet />
          </main>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
