import { css } from '@emotion/react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/alegreya-sans'; //for headers and displays
import '@fontsource/roboto'; // body text

const globalStyles = css`
	body {
		min-height: 100%;
	}
	html {
		height: 100%;
		font-family: 'Roboto';
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-family: 'Alegreya Sans';
		}
	}
	main {
		flex: 1;
	}
	footer {
	}
`;
export default globalStyles;
