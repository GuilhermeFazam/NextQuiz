import React from 'react'
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import db from '../../db.json'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <title>NextQuiz - Imersão Alura #2</title>
          <meta name="title" content={db.metatagsOG[0].title} />
          <meta name="description" content={db.metatagsOG[0].url} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={db.metatagsOG[0].url} />
          <meta
            property="og:title"
            content="NextQuiz — Um Quiz desenvolvido em NEXT.JS"
          />
          <meta property="og:description" content={db.metatagsOG[0].url} />
          <meta property="og:image" content={db.metatagsOG[0].image} />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={db.metatagsOG[0].url} />
          <meta property="twitter:title" content={db.metatagsOG[0].title} />
          <meta property="twitter:description" content={db.metatagsOG[0].url} />
          <meta
            property="twitter:image"
            content={db.metatagsOG[0].image}
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}