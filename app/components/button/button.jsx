import './button.css'
import Link from 'next/link'

export default function Button(props) {
    return (
        <Link href={props.reference} className={`button-styling ${props.className}`}>
            {props.content}
        </Link>
    )
}
