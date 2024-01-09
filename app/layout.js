import Head from 'next/head';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import { inter } from './fonts';
import './globals.css';

export default function Layout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
        <Navbar />
        { children }
        <Footer />
    </html>
  )
};
