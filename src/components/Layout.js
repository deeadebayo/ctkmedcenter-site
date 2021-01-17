import React from 'react';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/alegreya-sans'; //for headers and displays
import '@fontsource/roboto'; // body text

import globalStyles from '../styles/globalStyles';
import Banner from './Banner';
import StyledNavbar from './StyledNavbar';
import Footer from './Footer';
const Wrapper = styled('div')`
	display: flex;
	min-height: 100vh;
	flex-direction: column;
`;

export default function Layout({ children }) {
	return (
		<Wrapper>
			<Global styles={globalStyles} />
			<Banner />
			<StyledNavbar />
			{children}
			<Footer />
		</Wrapper>
	);
}
