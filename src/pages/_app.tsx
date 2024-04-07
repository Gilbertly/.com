import Script from 'next/script';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="./assets/vendor/preline/dist/preline.js" />
      <Component {...pageProps} />
    </>
  );
}
