import React from 'react';
import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/lato';
import '@fontsource/grand-hotel';
import '@fontsource/roboto';

import Banner from './Banner';
import StyledNavbar from './StyledNavbar';
import Footer from './Footer';
const Wrapper = styled('div')``,
	globalStyles = css`
		color: 'red';
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

// @font-face {
//     font-family: FrenchFries;
//     src: url(${font});
//   }
//   html {
//     font-family: FrenchFries, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
//     color: var(--black);
//   }
//   p, li {
//     letter-spacing: 0.5px;
//   }
//   h1,h2,h3,h4,h5,h6 {
//     font-weight: normal;
//     margin: 0;
//   }
