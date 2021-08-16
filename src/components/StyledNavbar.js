import React from 'react';
import { Link } from 'gatsby';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import { css } from '@emotion/react';

import DropdownMenu from './DropdownMenu';
import dropdownLinks from '../page-links';

import styled from 'styled-components';
import { getFormattedHealthyDate } from '../utils/formattedDate';

const StylededNavbar = styled.header``;
// when I add css styles for this, switch to object syntax
// const navbarStyle = css``

export default function StyledNavbar() {
	const NavigationItem = ({name, path}) => {
		return (
			<Nav.Item>
				<Link className='nav-link' to={`/${path}`}>
					{name}
				</Link>
			</Nav.Item>
		);
	};
	
	
	
	return (
		<StylededNavbar>
			<Navbar variant='light' sticky='top'>
				<Container>
					<Navbar.Brand href='#home'>
						Icon in here somewhere
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='' />
					<Navbar.Collapse>
						<Nav className='mr-auto'>
							<NavigationItem name='Home' path='' />
							{Object.keys(dropdownLinks).map((key) => (
								<DropdownMenu
									key={key}
									index={key}
									details={dropdownLinks[key]}
								/>
							))}
							<NavigationItem name='Contact' path='contact' />
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</StylededNavbar>
	);
}
