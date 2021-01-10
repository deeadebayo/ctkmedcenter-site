import React from 'react';
import { Link } from 'gatsby';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import DropdownMenu from './DropdownMenu';
import styled from 'styled-components';
import navigationLinks from '../page-links';

const StylededNavbar = styled.header``;

export default function StyledNavbar() {
	const renderNavigationItems = (navItemText, navItemLink) => {
		return (
			<Nav.Item>
				<Link className='nav-link' to={`/${navItemLink}`}>
					{navItemText}
				</Link>
			</Nav.Item>
		);
	};

	return (
		<StylededNavbar>
			<Navbar variant='light' sticky='top'>
				<Navbar.Brand href='#home' />
				<Navbar.Toggle aria-controls='' />
				<Navbar.Collapse>
					<Nav className='mr-auto'>
						{renderNavigationItems('Home', '')}
						{Object.keys(navigationLinks).map((key) => (
							<DropdownMenu
								key={key}
								details={navigationLinks[key]}
							/>
						))}
						{renderNavigationItems('Contact', 'contact')}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</StylededNavbar>
	);
}
