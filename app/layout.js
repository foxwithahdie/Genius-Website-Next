import Head from 'next/head';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import { inter } from './fonts';
import './globals.css';

export default function Layout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet"/>
        </Head>
        <Navbar />
        { children }
        <Footer />
    </html>
  )
};
