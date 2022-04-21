import Head from 'next/head';
import '../styles.scss'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Camalipt Map</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet" />
         
            </Head>

            <Component {...pageProps} />
        </>
    );
}
export default MyApp
