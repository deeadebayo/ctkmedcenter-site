import React from 'react';
import { Container } from 'react-bootstrap';

import Hero from '../components/Hero';
import QuickLinks from '../components/QuickLinks';
import HealthServices from '../components/HealthServices';
import ClinicInfo from '../components/ClinicInfo';
import Testimonials from '../components/Testimonials';
import ContactMap from '../components/ContactMap';
import { Helmet } from 'react-helmet';
import SEO from '../components/seo';

const HomePage = () => {
	return (
		<main>
			<Helmet>
				<title>Trying this out</title>
			</Helmet>
			<SEO article />
			<Hero />
			<Container>
				<QuickLinks />
				<HealthServices />
				<ClinicInfo />
				<Testimonials />
				<ContactMap />
			</Container>
		</main>
	);
};

export default HomePage;
