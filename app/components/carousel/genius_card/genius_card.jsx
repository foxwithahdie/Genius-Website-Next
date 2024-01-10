import './genius_card.css'
import Button from '../../button/button'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6"

export default function GeniusCard(props) {
    return (
        <div className={`genius-card ${props.className}`}>
            <Image
                src={props.image}
                alt={props.alt}
                className='genius-image'
            />
            <div className='genius-card-content'>
                <h3>Spring 2023</h3>
                <h2>Joy Buolamwini</h2>
                <Button 
                    content='View'
                    icon={<FaArrowRight className='button-icon'/>}
                    reference='/'
                    className='genius-button'
                />
            </div>
        </div>
    )
}
