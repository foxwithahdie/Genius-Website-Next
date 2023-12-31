import './globals.css'
import './index.css'
import Image from 'next/image'
import PageCard from './components/page_card/page_card'
import geniusBanner from '../public/Images/Homepage Images/Genius-Banner.png'
import GeniusGroupPhoto from '../public/Images/Homepage Images/Genius Group Photo.png'
import AboutTheGeniuses from '../public/Images/Homepage Images/About-the-Geniuses.png'

export const metadata = {
    title: 'Genius Within',
    description: null,
  }

export default function Index() {
    return (
        <div>
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
            <main className='main-content'>
                <PageCard 
                reverse={false}
                image={GeniusGroupPhoto}
                alt='A photo of the group that brought the Genius project to life.'
                 />
            </main>
        </div>
    )
};
