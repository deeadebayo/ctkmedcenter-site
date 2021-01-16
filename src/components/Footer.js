import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { css } from '@emotion/react';
import { Link } from 'gatsby';

const footer = css`
		display: grid;
		.footer__links {
		}
		.footer__company {
			border-top: '1px solid #DDDDDD';
		}
	`,
	footerLinksData = [
		{
			id: 1,
			headerTitle: 'About',
			links: [
				{ name: 'Doctor', url: '/about/doctor' },
				{ name: 'Values', url: '/about/values' },
			],
		},
		{
			id: 2,
			headerTitle: 'Resources',
			links: [
				{ id: 1, name: 'Billing', url: '/patient-resources/billing' },
				{
					id: 2,
					name: 'First Visit',
					url: '/patient-resources/first-visit',
				},
				{
					id: 3,
					name: 'Forms',
					url: '/patient-resources/forms',
				},
			],
		},
		{
			id: 3,
			headerTitle: 'Resources',
			links: [
				{ id: 1, name: 'Billing', url: '/patient-resources/billing' },
				{
					id: 2,
					name: 'First Visit',
					url: '/patient-resources/first-visit',
				},
				{
					id: 3,
					name: 'Forms',
					url: '/patient-resources/forms',
				},
			],
		},
	],
	Footer = () => (
		<footer css={footer}>
			<Container>
				<Row className='footer__links'>
					{footerLinksData.map((linkData) => (
						<Col>
							<section>
								<h2>{linkData.headerTitle}</h2>
								<ul>
									{linkData.links.map((link) => (
										<li key={link.id}>
											<Link to={link.url}>
												{link.name}
											</Link>
										</li>
									))}
								</ul>
							</section>
						</Col>
					))}
				</Row>
				<hr />
				<Row className='footer__company'>
					<Col>
						<p>
							© {2021} Christ the King Healthcare. All rights
							reserved · Privacy · Credits · Sitemap
						</p>
					</Col>
					<Col>
						<p>Call us icon and google business icon</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);

export default Footer;

// 	.page-footer {
// 		height: 215px;
// 	/*    height: auto;*/
// 		background: #56636a;
// 		border-top: 6px solid #FF724A;
// 	}

// 	@media (max-width: 767px) {
// 		.page-footer {
// 			height: 320px;
// 		}
// 	}

// 	.page-footer p {
// 		color: #fff;
// 	}
