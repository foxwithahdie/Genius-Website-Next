import '../globals.css';
import './themakingof.css';
import PageCard from '../components/page_card/page_card';
import AboutTheGeniuses from '../../public/images/homepage/about.png';

export default function TheMakingOf() {
    return (
        <div>
            <PageCard 
                reverse
                image={AboutTheGeniuses}
                alt='Symbols of the geniuses.'
                title='About the Geniuses'
                reference='/geniuses'
                subtitle={`Learn about the geniuses who brought the \r\ninstallation to life.`}
            />
        </div>
    )
};