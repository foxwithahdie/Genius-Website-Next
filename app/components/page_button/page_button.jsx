import './page_button.css'
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"

export default function PageButton(props) {
    let pageNum = props.pageNumber
    let pageAmount = props.pageAmount
    return (
        <div className={`page-button ${props.className}`}>
            <p className='page-button-text'>
                <IoIosArrowBack className='forward-cheveron'/>{pageNum} of {pageAmount}<IoIosArrowForward className='backward-cheveron'/>
            </p>
        </div>
    )
}