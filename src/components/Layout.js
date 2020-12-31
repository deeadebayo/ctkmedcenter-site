import React from 'react';
import Nav from './Nav';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Layout({ children }) {
	return (
		<div>
			<Nav />
			{children}
			{/* <Footer /> */}
		</div>
	);
}
