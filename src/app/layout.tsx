import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: null,
	description: null,
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
<html lang="en">
    <Head>
		<link rel="preconnect" href="https://fonts.googleapis.com"/>
		<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
		<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
    </Head>
	<body>
		<nav className="genius-navbar">
			<h1 className="genius-navbar-title">GENIUS WITHIN</h1>
		</nav>
		<main>{ children }</main>
		<footer className="genius-footer">
			<ul className="genius-footer-list">
				<h3 className="genius-footer-title">Innovators for Purpose</h3>
				<h4>91 1st Street #425475</h4>
				<h4>Cambridge, MA 02141-1804</h4>
				<h4>857-285-3842</h4>
				<h4><i>Empowering Our Next Generation of Innovators.</i></h4>
				<h3 className="genius-footer-copyright">© 2014-22 INNOVATORS FOR PURPOSE</h3>
			</ul>
		</footer>
	</body>
    </html>
  )
}

/* 

TODO: Finish mobile footer
TODO: Finish desktop layout and start media query
TODO: Start index page

*/