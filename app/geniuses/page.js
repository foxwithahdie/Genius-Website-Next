import '../globals.css';
import './geniuses.css';
import PageCard from '../components/page_card/page_card';
import GeniusGroupPhoto from '../../public/Images/Homepage Images/Genius Group Photo.png';

export default function Geniuses() {
    return (
        <div>
            <div className='spacing'></div>
            <main className='main-content'>
                <div className='pagebreak'></div>
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