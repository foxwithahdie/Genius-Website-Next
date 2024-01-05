import './page_card.css'
import Button from '../button/button'
import Image from 'next/image'
import NewLineText from '../../helper_functions'

export default function PageCard(props) {
    console.log(props.reference)
    let cardClassName = (props.reverse) ? 'card reverse' : 'card'
    return (
        <div className={cardClassName}>
            <Image
            src={props.image}
            alt={props.alt}
            className='card-image'
            />
            <div className='card-content'>
                <h1>{props.title}</h1>
                <h3>{NewLineText(props.subtitle)}</h3>
                <Button
                content='Learn More'
                reference={props.reference}
                className='card-button'
                />
            </div>
        </div>
    )
}
