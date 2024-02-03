export default function NewLineText(string) {
    let text = string;
    // eslint-disable-next-line react/jsx-key
    return (text.includes("\n")) ? text.split("\n").map(str => <p style={{margin: 0,}}> {str} </p>) : text;
};
