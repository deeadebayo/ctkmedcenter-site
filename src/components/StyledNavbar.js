import React from 'react';
import { Link } from 'gatsby';
import { Navbar, Nav, Container } from 'react-bootstrap';

import DropdownMenu from './DropdownMenu';
import dropdownLinks from '../page-links';

import styled from 'styled-components';

const StylededNavbar = styled.header``;

export default function StyledNavbar() {
	const NavigationItem = (props) => {
		return (
			<Nav.Item>
				<Link className='nav-link' to={`/${props.path}`}>
					{props.name}
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
