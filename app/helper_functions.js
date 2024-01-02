export default function NewLineText(string) {
    let text = string;
    let newText = (text.includes("\n")) ? text.split("\n").map(str => <p style={{margin: 0,}}>{str}</p>) : text;
    return newText;
};