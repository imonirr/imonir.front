import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, injectGlobal } from 'styled-components';

// injectGlobal`
//   @import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css');
//   @import url('https://cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.min.css');
// `;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const isProduction = process.env.NODE_ENV === 'production';

      const initialProps = await Document.getInitialProps(ctx);
      return {
        isProduction,
        ...initialProps,
        styles: (
          <>
              {initialProps.styles}
              {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal();
    }


    // const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    // const styleTags = sheet.getStyleElement();
    // return { ...page, styleTags };
  }

  render() {
    // <link rel="stylesheet" href="/_next/static/style.css" />
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Full stack developer with background in DevOps" />

          <link rel="apple-touch-icon" sizes="57x57" href="/static/images/favicon/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/static/images/favicon/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/images/favicon/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/images/favicon/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/static/images/favicon/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/static/images/favicon/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/static/images/favicon/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/static/images/favicon/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/images/favicon/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/static/images/favicon/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/static/images/favicon/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/static/images/favicon/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />

          {this.props.styleTags}

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
