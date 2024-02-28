import Link from 'next/link'

const Navbar = () => {
	return (
		<div>
			<div>
				<Link href='/'>Navbar home</Link>
			</div>
			<div>
				<p>other nav links</p>
				<Link href='/appointment'>appointments</Link>
				<Link href='/featured-services'>featured services</Link>
				<Link href='/patient-resources'>patient resources</Link>
				<Link href='/about'>about</Link>
				<Link href='/contact'>contact</Link>
			</div>
		</div>
	)
}
export default Navbar
