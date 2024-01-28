import './carousel.css'
import GeniusCard from './genius_card/genius_card'
import GeniusCardPhoto from '../../../public/images/joy/desktop_card.png'
import PageButton from '../page_button/page_button'

export default function Carousel(props) {
    
    return (
        <div className='carousel'>
            <PageButton pageNumber={1} pageAmount={3} className='carousel-page-button'/>
            <GeniusCard
                name='Dr. Joy Buolamwini' 
                image={GeniusCardPhoto}
                alt='Joy Buolamwini'
                className='single-card'
            />
            <GeniusCard
                name='Dr. Joy Buolamwini2' 
                image={GeniusCardPhoto}
                alt='Joy Buolamwini'
                className='single-card'
            />
            <GeniusCard
                name='Dr. Joy Buolamwini3' 
                image={GeniusCardPhoto}
                alt='Joy Buolamwini'
                className='single-card'
            />
            <GeniusCard
                name='Dr. Joy Buolamwini4' 
                image={GeniusCardPhoto}
                alt='Joy Buolamwini'
                className='single-card'
            />
            <GeniusCard
                name='Dr. Joy Buolamwini5' 
                image={GeniusCardPhoto}
                alt='Joy Buolamwini'
                className='single-card'
            />
            <GeniusCard
                name='Dr. Joy Buolamwini6' 
                image={GeniusCardPhoto}
                alt='Joy Buolamwini'
                className='single-card'
            />
        </div>
    )
}
