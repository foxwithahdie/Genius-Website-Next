import '../globals.css';
import './geniuses.css';
import PageCard from '../components/page_card/page_card';
import Carousel from '../components/carousel/carousel';
import GeniusGroupPhoto from '../../public/images/homepage/group.png';


export default function Geniuses() {
    return (
        <div>
            <main className='main-content'>
                <h1 className='title'>About the Geniuses</h1>
                <Carousel six/>
                <div className='pagebreak'></div>
                <PageCard 
                    reverse={false}
                    image={GeniusGroupPhoto}
                    alt='A photo of the group that brought the Genius project to life.'
                    title='The Making of'
                    subtitle='The process behind the Genius Within installation'
                    reference='/geniuses'
                    key={0}
                />
            </main>
        </div>
    )
};
