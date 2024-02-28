import { Inter } from 'next/font/google'
import { GoogleTagManager } from '@next/third-parties/google'
import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: {
		default: `Christ the King Healthcare`,
		template: `%s | Christ the King Healthcare`,
	},
	description: `From regular physicals to preventative care, our internal medicine clinic manages all aspects of adult patients' health care. Discover primary care with a difference!`,
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
