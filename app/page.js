import './globals.css'
import './index.css'
import Image from 'next/image'
import geniusBanner from '../public/Images/Homepage Images/Genius-Banner.png'

export const metadata = {
    title: 'Genius Within',
    description: null,
  }

export default function Index() {
    return (
        <div className='title-box'>
                <Image
                src={geniusBanner}
                alt='Geniuses displayed on a banner.'
                className='genius-banner'
                />
            <div className='title'>
                <h1>Unlocking the Innovator Inside</h1>
            </div>
        </div>
    )
};
