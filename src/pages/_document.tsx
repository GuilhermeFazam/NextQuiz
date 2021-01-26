import Document, {
    DocumentContext,
    DocumentInitialProps,
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import db from '../../db.json';
import AppleFavicon from '../assets/favicon/apple-touch-icon.png';
import Favicon16 from '../assets/favicon/favicon-16x16.png';
import Favicon32 from '../assets/favicon/favicon-32x32.png';

export default class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext,
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render(): JSX.Element {
        return (
            <Html lang="pt">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="title" content={db.metatagsOG[0].title} />
                    <meta name="description" content={db.metatagsOG[0].url} />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={db.metatagsOG[0].url} />
                    <meta
                        property="og:title"
                        content={db.metatagsOG[0].title}
                    />
                    <meta
                        property="og:description"
                        content={db.metatagsOG[0].url}
                    />
                    <meta
                        property="og:image"
                        content={db.metatagsOG[0].image}
                    />
                    <meta
                        property="twitter:card"
                        content="summary_large_image"
                    />
                    <meta
                        property="twitter:url"
                        content={db.metatagsOG[0].url}
                    />
                    <meta
                        property="twitter:title"
                        content={db.metatagsOG[0].title}
                    />
                    <meta
                        property="twitter:description"
                        content={db.metatagsOG[0].url}
                    />
                    <meta
                        property="twitter:image"
                        content={db.metatagsOG[0].image}
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href={AppleFavicon}
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href={Favicon32}
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href={Favicon16}
                    />

                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
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
