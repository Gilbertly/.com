import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="Gilbert Gathara"
            content="Software Engineering Portfolio"
          />
          <link rel="canonical" href="https://gilbertly.com/" />
          <link
            href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-gray-50 dark:bg-slate-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
