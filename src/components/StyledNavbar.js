import React from 'react';
import { Link } from 'gatsby';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

export default function TopNavigation() {
	const navigationItems = (navItemText, navItemLink) => {
			return (
				<Nav.Item>
					<Link className='nav-link' to={`/${navItemLink}`}>
						{navItemText}
					</Link>
				</Nav.Item>
			);
		},
		navigationDropdownItems = (navItemText, navItemLink) => {
			return (
				<NavDropdown.Item>
					<Link className='nav-link' to={`/${navItemLink}`}>
						{navItemText}
					</Link>
				</NavDropdown.Item>
			);
		};

	return (
		<header>
			<Navbar variant='light' sticky='top'>
				<Navbar.Brand href='#home' />
				<Navbar.Toggle aria-controls='' />
				<Navbar.Collapse>
					<Nav className='mr-auto'>
						{navigationItems('Home', '')}
						<NavDropdown title='Our Services'>
							{navigationDropdownItems('Sick Visits', '')}
							{navigationDropdownItems('Telehealth', '')}
							{navigationDropdownItems('Allergy Testing', '')}
							{navigationDropdownItems('Health Screenings', '')}
							{navigationDropdownItems('Wellness Products', '')}
							{navigationDropdownItems(
								'Travel Immunizations',
								''
							)}
							{navigationDropdownItems(
								'Immigration Physicals',
								''
							)}
						</NavDropdown>
						<NavDropdown title='Patient Resources'>
							{navigationDropdownItems('Your First Visit', '')}
							{navigationDropdownItems('FAQs', '')}
							{navigationDropdownItems('Forms & Paperwork?', '')}
							{navigationDropdownItems(
								'Insurance and Payments',
								''
							)}
							{navigationDropdownItems(
								'Online Health Records',
								''
							)}
							{navigationDropdownItems(
								'Medical Records Release',
								''
							)}
						</NavDropdown>
						<NavDropdown title='About'>
							{navigationDropdownItems('About Us', '')}
							{navigationDropdownItems('What to Expect', '')}
							{navigationDropdownItems('Our Doctor', '')}
						</NavDropdown>
						{navigationItems('Contact', 'contact')}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
}
