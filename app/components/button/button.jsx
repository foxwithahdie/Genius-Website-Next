import './button.css'

export default function Button(props) {
    return (
        <a href={props.ref} className={`button-styling ${props.className}`}>
            {props.content}
        </a>
    )
}
