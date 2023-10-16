import '../css/globals.css';
import '../css/home-page.css';
import { Inter } from 'next/font/google';
import RootLayout from './components/layout';
import Image from 'next/image';
import GeniusBanner from '../Images/Homepage Images/Genius Banner.png';

const inter = Inter({ subsets: ['latin'] });


export default function Index() {
  return (
    <Image
    src={GeniusBanner}
    alt="Genius Banner."
    />

  )
}

/*

TODO: Start index page
TODO: 

*/