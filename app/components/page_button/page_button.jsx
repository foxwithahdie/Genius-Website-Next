import './page_button.css'
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"

export default function PageButton(props) {
    let pageNum = props.pageNumber
    let pageAmount = props.pageAmount
    return (
        <div className={`page-button ${props.className}`}>
            <p className='page-button-text'>
                <span className='forward-cheveron'><IoIosArrowBack /></span>
                    {pageNum} of {pageAmount}
                <span className='backward-cheveron'><IoIosArrowForward /></span>
               
            </p>
        </div>
    )
}