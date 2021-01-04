import React from 'react';
import { Link } from 'gatsby';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

export default function StyledNavbar(props) {
	const navigationItems = (navItemText, navItemLink) => {
			return (
				<Nav.Item>
					<Link className='nav-link' to={`/${navItemLink}`}>
						{navItemText}
					</Link>
				</Nav.Item>
			);
		},
		services = {
			name: 'Our Services',
			dir: 'services',
			links: [
				{ title: 'Sick Visits', path: '/' },
				{ title: 'Telehealth', path: '/' },
			],
		},
		patientResources = {
			name: 'Patient Resources',
			dir: 'patient-resources',
			links: [
				{ title: 'Your First Visit', path: 'first-visit' },
				{ title: 'Telehealth', path: '' },
				{ title: 'Telehealth', path: '' },
				{ title: 'Telehealth', path: '' },
			],
		};

	function renderDropdown(dropdown) {
		const links = Object.entries(dropdown.links);
		console.log(links);

		return (
			// <NavDropdown title={name}>
			links.map((key) => {
				<NavDropdown.Item>
					<Link className='nav-link' to='/'>
						{/* {console.log(Object.keys(links[key]))} */}
						{console.log(typeof key)}
						{console.log(key)}
						{key}
					</Link>
				</NavDropdown.Item>;
			})
			// </NavDropdown>
		);
	}
	// navigationDropdownItems = (navItemText, navItemLink) => {
	// 	return (
	// 		<NavDropdown.Item>
	// 			<Link className='nav-link' to={`/${navItemLink}`}>
	// 				{navItemText}
	// 			</Link>
	// 		</NavDropdown.Item>

	return (
		<header>
			<Navbar variant='light' sticky='top'>
				<Navbar.Brand href='#home' />
				<Navbar.Toggle aria-controls='' />
				<Navbar.Collapse>
					<Nav className='mr-auto'>
						{navigationItems('Home', '')}
						<NavDropdown title={services.name}>
							{renderDropdown(services.links)}
						</NavDropdown>
						{/* <NavDropdown title='Our Services'>
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
						</NavDropdown> */}
						{/* <NavDropdown title='Patient Resources'>
							{navigationDropdownItems(
								'Your First Visit',
								'first-visit'
							)}
							{navigationDropdownItems('FAQs', 'questions')}
							{navigationDropdownItems(
								'Forms & Paperwork?',
								'forms'
							)}
							{navigationDropdownItems(
								'Insurance and Payments',
								'billing'
							)}
							{navigationDropdownItems(
								'Online Health Records',
								'online-records'
							)}
							{navigationDropdownItems(
								'Medical Records Release',
								'records-release'
							)}
						</NavDropdown> */}
						{/* <NavDropdown title='About'>
							{navigationDropdownItems('About Us', 'about-us')}
							{navigationDropdownItems(
								'What to Expect',
								'values'
							)}
							{navigationDropdownItems('Our Doctor', 'doctor')}
						</NavDropdown> */}
						{navigationItems('Contact', 'contact')}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
}
