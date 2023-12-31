import './button.css'

export default function Button(props) {
    return (
        <a href={props.link} className='button-styling' style={{
            width: props.width,
            marginLeft: props.marginLeft,
            marginBottom: props.marginBottom,
        }}>
            {props.content}
        </a>
    )
}