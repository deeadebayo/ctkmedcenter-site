import React from 'react';

export default function DropdownLinks() {
	const navigationLinks = {
		services: {
			name: 'Our Services',
			links: [{ title: 'Sick Visits', path: '' }],
		},
		patientResources: {
			name: 'Patient Resources',
			links: [{ title: 'Your First Visit', path: 'first-visit' }],
		},
	};
	const { name, link } = navigationLinks;
}
