import { Link } from 'gatsby';
import React from 'react';
import { NavDropdown } from 'react-bootstrap';

export default (props) => {
	const { id, name, dir, links } = props.details;
	return (
		<NavDropdown title={name} key={id}>
			{links.map((link) => (
				<NavDropdown.Item as='li'>
					<Link className='nav-link' to={`/${dir}/${link.to}`}>
						{link.title}
					</Link>
				</NavDropdown.Item>
			))}
		</NavDropdown>
	);
};
