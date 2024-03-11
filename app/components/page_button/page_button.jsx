"use client"

import './page_button.css'
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"

export default function PageButton(props) {
    console.log(props)
    let pageNum = props.pageNumber
    let pageAmount = props.pageAmount

    
    return (
        <div className={`page-button ${props.className}`}>
            <p className='page-button-text'>
                <button className='forward-cheveron' onClick={props.leftFunc}><IoIosArrowBack /></button>
                    {pageNum} of {pageAmount}
                <button className='backward-cheveron' onClick={props.rightFunc}><IoIosArrowForward /></button>
            </p>
        </div>
    )
}