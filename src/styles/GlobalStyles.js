import { css } from '@emotion/react';

import 'bootstrap/dist/css/bootstrap.min.css';

const globalStyles = css`
	body {
		min-height: 100%;
		height: 100%;
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-family: 'Alegreya Sans';
		}
		p {
			font-family: 'Alegreya Sans';
			max-width: 75ch;
		}
	}
	main {
		flex: 1;
	}
	footer {
	}
`;
export default globalStyles;
