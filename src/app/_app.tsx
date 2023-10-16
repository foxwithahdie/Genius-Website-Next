import type { AppProps } from 'next/app';
import '../css/globals.css';
import '../css/home-page.css';
import { Inter } from 'next/font/google';
import RootLayout from './components/layout';

const inter = Inter({ subsets: ['latin'] });

function Main( { Component, pageProps }: AppProps ) {
  return (
    <RootLayout>
        <Component {...pageProps} />
    </RootLayout>
  );
}

export default Main;