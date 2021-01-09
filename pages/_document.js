import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head lang="en">
          <meta name="description" content="Rafia Mohammed Al Qarni Trading Est. is the famous for all your safety and operational equipment." />
          <meta name="author" content="Crosa Apps Ltd." />
          <link rel="icon" href="/assets/images/logo-bg.png" />
          <meta property="og:image" content="/assets/images/web-preview.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument