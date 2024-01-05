import './button.css'
import Link from 'next/link'

export default function Button(props) {
    console.log(props.reference)
    return (
        <Link href={props.reference} className={`button-styling ${props.className}`}>
            {props.content}
        </Link>
    )
}
