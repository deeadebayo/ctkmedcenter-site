import React from 'react';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';

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
