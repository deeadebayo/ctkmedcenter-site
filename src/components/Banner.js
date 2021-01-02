import React from 'react';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const BannerHeaderStyles = styled.header`
	padding-bottom: 100px;
	nav {
		display: grid;
		grid-template-columns: 3fr 1fr 1fr;
	}
`;

export default function Banner() {
	return (
		<BannerHeaderStyles>
			<Navbar variant='light' fixed='top'>
				<p>{`Today is . It's a great day to be healthy!`}</p>
				<p>
					📞<a href='tel:7705548015'>770 554 8015</a>
				</p>
				<p>
					<a href='mailto:info@ctkmedcenter.com?subject=General%20Inquiry'>
						info@ctkmedcenter.com
					</a>
				</p>
			</Navbar>
		</BannerHeaderStyles>
	);
}
