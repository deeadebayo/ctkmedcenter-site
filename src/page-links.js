const dropdownLinks = {
	services: {
		id: 1,
		name: 'Our Services',
		dir: 'services',
		links: [
			{ title: 'Sick Visits', to: '' },
			{ title: 'Telehealth', to: '' },
			{ title: 'Allergy Testing', to: '' },
			{ title: 'Health Screenings', to: '' },
			{ title: 'Wellness Products', to: '' },
			{ title: 'Travel Immunizations', to: '' },
			{ title: 'Immigration Physicals', to: '' },
		],
	},
	patientResources: {
		id: 2,
		name: 'Patient Resources',
		dir: 'patient-resources',
		links: [
			{ title: 'Your First Visit', to: 'first-visit' },
			{ title: 'Forms & Paperwork?', to: 'forms' },
			{ title: 'Insurance and Payments', to: 'billing' },
			{ title: 'Online Health Records', to: 'online-records' },
			{ title: 'Medical Records Release', to: 'records-release' },
		],
	},
	about: {
		id: 3,
		name: 'About',
		dir: 'about',
		links: [
			{ title: 'About Us', to: 'about-us' },
			{ title: 'What to Expect', to: 'values' },
			{ title: 'Our Doctor', to: 'doctor' },
		],
	},
};
export default dropdownLinks;
