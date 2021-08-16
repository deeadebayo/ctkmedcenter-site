import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { css } from '@emotion/react';
import { getFormattedHealthyDate } from '../utils/formattedDate';


const bannerStyle = css`
grid-row: 1/2;
	padding-bottom: 100px;
	nav {
		display: grid;
		grid-template-columns: 3fr 1fr 1fr;
	}`

export default function Banner({date}) {
	return (
		<header css={bannerStyle}>
			<Navbar variant='light' fixed='top'>
				<Container>
					<p>Today is {getFormattedHealthyDate(date)}. It's a great day to be healthy!</p>
					<p>
						📞<a href='tel:7705548015'>770 554 8015</a>
					</p>
					<p>
						<a href='mailto:info@ctkmedcenter.com?subject=General%20Inquiry'>
							info@ctkmedcenter.com
						</a>
					</p>
				</Container>
			</Navbar>
		</header>
	);
}
