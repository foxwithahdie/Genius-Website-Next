'use client'

import { useState } from 'react'

import './carousel.css'
import GeniusCard from './genius_card/genius_card'
import PageButton from '../page_button/page_button'
// import images from '../../images'

import joy_buolamwini_card_desktop from '../../../public/Images/joy/desktop_card.png';
import joy_buolamwini_card_mobile from '../../../public/Images/joy/mobile_card.png';
import joy_buolamwini_banner_desktop from '../../../public/Images/joy/desktop_banner.png';
import joy_buolamwini_banner_mobile from '../../../public/Images/joy/mobile_banner.png';

import millie_dresselhaus_card_desktop from '../../../public/Images/dressel/desktop_card.png';
import millie_dresselhaus_card_mobile from '../../../public/Images/dressel/mobile_card.png';
import millie_dresselhaus_banner_desktop from '../../../public/Images/dressel/desktop_banner.png';
import millie_dresselhaus_banner_mobile from '../../../public/Images/dressel/mobile_banner.png'; 

import sal_khan_card_desktop from '../../../public/Images/khan/desktop_card.png';
import sal_khan_card_mobile from '../../../public/Images/khan/mobile_card.png';
import sal_khan_banner_desktop from '../../../public/Images/khan/desktop_banner.png';
import sal_khan_banner_mobile from '../../../public/Images/khan/mobile_banner.png'; 

import danielle_wood_card_desktop from '../../../public/Images/wood/desktop_card.png';
import danielle_wood_card_mobile from '../../../public/Images/wood/mobile_card.png';
import danielle_wood_banner_desktop from '../../../public/Images/wood/desktop_banner.png';
import danielle_wood_banner_mobile from '../../../public/Images/wood/mobile_banner.png'; 

import sabrina_pasterski_card_desktop from '../../../public/Images/pasterski/desktop_card.png';
import sabrina_pasterski_card_mobile from '../../../public/Images/pasterski/mobile_card.png';
import sabrina_pasterski_banner_desktop from '../../../public/Images/pasterski/desktop_banner.png';
import sabrina_pasterski_banner_mobile from '../../../public/Images/pasterski/mobile_banner.png'; 

import ronald_mcnair_card_desktop from '../../../public/Images/mcnair/desktop_card.png';
import ronald_mcnair_card_mobile from '../../../public/Images/mcnair/mobile_card.png';
import ronald_mcnair_banner_desktop from '../../../public/Images/mcnair/desktop_banner.png';
import ronald_mcnair_banner_mobile from '../../../public/Images/mcnair/mobile_banner.png'; 

import bob_moses_card_desktop from '../../../public/Images/moses/desktop_card.png';
import bob_moses_card_mobile from '../../../public/Images/moses/mobile_card.png';
import bob_moses_banner_desktop from '../../../public/Images/moses/desktop_banner.png';
import bob_moses_banner_mobile from '../../../public/Images/moses/mobile_banner.png'; 

import ayanna_pressley_card_desktop from '../../../public/Images/pressley/desktop_card.png';
import ayanna_pressley_card_mobile from '../../../public/Images/pressley/mobile_card.png';
import ayanna_pressley_banner_desktop from '../../../public/Images/pressley/desktop_banner.png';
import ayanna_pressley_banner_mobile from '../../../public/Images/pressley/mobile_banner.png'; 

import shirley_jackson_card_desktop from '../../../public/Images/jackson/desktop_card.png';
import shirley_jackson_card_mobile from '../../../public/Images/jackson/mobile_card.png';
import shirley_jackson_banner_desktop from '../../../public/Images/jackson/desktop_banner.png';
import shirley_jackson_banner_mobile from '../../../public/Images/jackson/mobile_banner.png'; 

import edwin_land_card_desktop from '../../../public/Images/land/desktop_card.png';
import edwin_land_card_mobile from '../../../public/Images/land/mobile_card.png';
import edwin_land_banner_desktop from '../../../public/Images/land/desktop_banner.png';
import edwin_land_banner_mobile from '../../../public/Images/land/mobile_banner.png'; 

import mary_gray_card_desktop from '../../../public/Images/gray/desktop_card.png';
import mary_gray_card_mobile from '../../../public/Images/gray/mobile_card.png';
import mary_gray_banner_desktop from '../../../public/Images/gray/desktop_banner.png';
import mary_gray_banner_mobile from '../../../public/Images/gray/mobile_banner.png'; 

import sageeta_bhatia_card_desktop from '../../../public/Images/bhatia/desktop_card.png';
import sageeta_bhatia_card_mobile from '../../../public/Images/bhatia/mobile_card.png';
import sageeta_bhatia_banner_desktop from '../../../public/Images/bhatia/desktop_banner.png';
import sageeta_bhatia_banner_mobile from '../../../public/Images/bhatia/mobile_banner.png'; 

import margaret_hamilton_card_desktop from '../../../public/Images/hamilton/desktop_card.png';
import margaret_hamilton_card_mobile from '../../../public/Images/hamilton/mobile_card.png';
import margaret_hamilton_banner_desktop from '../../../public/Images/hamilton/desktop_banner.png';
import margaret_hamilton_banner_mobile from '../../../public/Images/hamilton/mobile_banner.png'; 

const images = [
    [joy_buolamwini_card_desktop, joy_buolamwini_banner_desktop, joy_buolamwini_card_mobile, joy_buolamwini_banner_mobile],
    [millie_dresselhaus_card_desktop, millie_dresselhaus_banner_desktop, millie_dresselhaus_card_mobile, millie_dresselhaus_banner_mobile],
    [sal_khan_card_desktop, sal_khan_banner_desktop, sal_khan_card_mobile, sal_khan_banner_mobile],
    [danielle_wood_card_desktop, danielle_wood_banner_desktop, danielle_wood_card_mobile, danielle_wood_banner_mobile],
    [sabrina_pasterski_card_desktop, sabrina_pasterski_banner_desktop, sabrina_pasterski_card_mobile, sabrina_pasterski_banner_mobile],
    [ronald_mcnair_card_desktop, ronald_mcnair_banner_desktop, ronald_mcnair_card_mobile, ronald_mcnair_banner_mobile],
    [bob_moses_card_desktop, bob_moses_banner_desktop, bob_moses_card_mobile, bob_moses_banner_mobile],
    [ayanna_pressley_card_desktop, ayanna_pressley_banner_desktop, ayanna_pressley_card_mobile, ayanna_pressley_banner_mobile],
    [shirley_jackson_card_desktop, shirley_jackson_banner_desktop, shirley_jackson_card_mobile, shirley_jackson_banner_mobile],
    [edwin_land_card_desktop, edwin_land_banner_desktop, edwin_land_card_mobile, edwin_land_banner_mobile],
    [mary_gray_card_desktop, mary_gray_banner_desktop, mary_gray_card_mobile, mary_gray_banner_mobile],
    [sageeta_bhatia_card_desktop, sageeta_bhatia_banner_desktop, sageeta_bhatia_card_mobile, sageeta_bhatia_banner_mobile],
    [margaret_hamilton_card_desktop, margaret_hamilton_banner_desktop, margaret_hamilton_card_mobile, margaret_hamilton_banner_mobile]
]

const geniusCardInfo = require('./genius_card_info.json')

const objToComponent = (name, image, alt, key) => <GeniusCard name={name} image={image} alt={alt} key={key} className='single-card' />

let componentList = []

for (let i = 0; i < Object.keys(geniusCardInfo).length; i++) {
    let obj = geniusCardInfo[Object.keys(geniusCardInfo)[i]]
    componentList.push(objToComponent(obj.name, images[i][0], obj.alt, i))
}

export default function Carousel(props) {

    let setsOfSix = []
    let setsOfThree = []
    let currentIndex = 0
    for (let i = 0; i < (props.six ? 3 : 5); i++) {
        let pushedList = []
        if (props.six) {
            let indexUpdate = 0;
            for (let i = currentIndex; i < ((currentIndex + 6)); i++) {
                pushedList.push(componentList[i])
                indexUpdate++
            }
            currentIndex += indexUpdate
            setsOfSix.push(pushedList)
        } else {
            let indexUpdate = 0;
            for (let i = currentIndex; i < ((currentIndex + 3)); i++) {
                pushedList.push(componentList[i])
                indexUpdate++
            }
            currentIndex += indexUpdate
            setsOfThree.push(pushedList)
        }
    }

    const [pageNumber, setPageNumber] = useState(1)

    const numSetsOfCards = props.six ? 3 : 5
    const [cards, setCards] = useState(props.six ? setsOfSix[0] : setsOfThree[0])
    const pageNumBoundary = (item) => 1 < item <= numSetsOfCards
    
    function handleCarouselForward(setPageNumParams, setCardSet) {
        setPageNumber(pageNumBoundary(setPageNumParams) ? setPageNumParams : pageNumber)
        setCards(props.six ? setsOfSix[pageNumBoundary(setCardSet) ? setCardSet : setsOfSix.findIndex(cards)] 
                            : setsofThree[pageNumBoundary(setCardSet) ? setCardSet : setsOfThree.findIndex(cards)])
    }

    function handleCarouselBackward(setPageNumParams, setCardSet) {
        setPageNumber(pageNumBoundary(setPageNumParams) > 1 ? setPageNumParams : pageNumber)
        setCards(props.six ? (setsOfSix[pageNumBoundary(setCardSet) ? setCardSet : setsOfSix.findIndex(cards)])
                            : (setsofThree[pageNumBoundary(setCardSet) ? setCardSet : setsOfThree.findIndex(cards)]))
    }
    
    return (
        <div className='carousel-set'>
            <PageButton 
                pageNumber={pageNumber}
                pageAmount={numSetsOfCards}
                className='carousel-page-button'
                leftFunc={() => handleCarouselBackward(pageNumber - 1, pageNumber - 2)}
                rightFunc={() => handleCarouselForward(pageNumber + 1, pageNumber)}
            />
            <div className={`carousel`}>
                {cards}
            </div>
        </div>
    )
}
