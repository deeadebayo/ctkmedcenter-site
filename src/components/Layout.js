import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavigation from './StyledNavbar';
import Banner from './Banner';

export default function Layout({ children }) {
	return (
		<div>
			<Banner />
			<TopNavigation />
			{children}
			{/* <Footer /> */}
		</div>
	);
}
