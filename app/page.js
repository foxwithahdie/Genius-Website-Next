import './globals.css';
import './index.css';
import Image from 'next/image';
import PageCard from './components/page_card/page_card';
import GeniusBanner from '../public/images/homepage/banner.png';
import GeniusGroupPhoto from '../public/images/homepage/group.png';
import AboutTheGeniuses from '../public/images/homepage/about.png';

export const metadata = {
    title: 'Genius Within',
    description: null,
};

export default function Index() {
    return (
        <div>
            <div className='title-box'>
                <Image
                    src={GeniusBanner}
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
                    title='The Making of'
                    subtitle='The process behind the Genius Within installation'
                    reference='/geniuses'
                    key={0}
                />
                <div className='pagebreak'></div>
                <PageCard 
                    reverse
                    image={AboutTheGeniuses}
                    alt='Symbols of the geniuses.'
                    title='About the Geniuses'
                    reference='/geniuses'
                    subtitle={`Learn about the geniuses who brought the \r\ninstallation to life.`}
                    key={1}
                 />
            </main>
        </div>
    )
};
