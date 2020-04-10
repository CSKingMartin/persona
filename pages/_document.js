// _document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'
import svg from '../public/svgs/sprite.svg';


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  render() {
    const generateSvgSprite = () => {
      const obj = { __html: svg };
      return obj;
    };

    return (
      <Html>
        <Head>
          <title>Conner Wells - Code Wizard</title>
          <link href="https://fonts.googleapis.com/css?family=Nunito+Sans|Sen:400,700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <div aria-hidden={true} className="is-hidden" dangerouslySetInnerHTML={generateSvgSprite()} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
