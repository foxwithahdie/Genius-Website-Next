import Head from 'next/head'
import Footer from './components/footer/footer'
import './globals.css'

export default function Layout({ children }) {
  return (
    <html lang="en">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet"/>
        </Head>
        
            <nav className="genius-navbar">
                <h1 className="genius-navbar-title">GENIUS WITHIN</h1>
            </nav>
            <main className='main-content'>{ children }</main>
            <Footer />
        
    </html>
  )
}
