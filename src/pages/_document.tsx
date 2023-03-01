import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <title>Gilbert Gathara</title> */}
          <meta charSet="utf-8" />
          <meta
            name="Gilbert Gathara"
            content="Software Engineering Portfolio"
          />
          {/* <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          /> */}
          <link rel="canonical" href="https://gilbertly.com/" />
          <link
            href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
