import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Banner';
import StyledNavbar from './StyledNavbar';
import Footer from './Footer';

export default function Layout({ children }) {
	return (
		<div>
			<Banner />
			<StyledNavbar />
			{children}
			<Footer />
		</div>
	);
}
