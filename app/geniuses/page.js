import '../globals.css';
import './geniuses.css';
import PageCard from '../components/page_card/page_card';
import GeniusCard from '../components/carousel/genius_card/genius_card';
import GeniusGroupPhoto from '../../public/images/homepage/group.png';
import GeniusCardPhoto from '../../public/images/joy/desktop_card.png';

export default function Geniuses() {
    return (
        <div>
            <div className='spacing'></div>
            <main className='main-content'>
                <div className='pagebreak'></div>
                <GeniusCard 
                    image={GeniusCardPhoto}
                    alt='Joy Buolamwini'
                />
                <PageCard 
                    reverse={false}
                    image={GeniusGroupPhoto}
                    alt='A photo of the group that brought the Genius project to life.'
                    title='The Making of'
                    subtitle='The process behind the Genius Within installation'
                    reference='/geniuses'
                />
            </main>
        </div>
    )
};
