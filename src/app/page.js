import './globals.css'
import Image from 'next/image'
import Layout from './layout'

const testingStyle = {
    fontSize: "100px",
}

export const metadata = {
    title: 'Genius Within',
    description: null,
  }

export default function Index() {
    return (
            <h1 className="testing" style={testingStyle}>hi</h1>
    )
};
