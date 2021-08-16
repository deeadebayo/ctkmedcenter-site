import React from 'react';
import GoogleMap from 'google-map-react';
import { Col, Row } from 'react-bootstrap';
import { css } from '@emotion/react';

const googleMapOptions = {
	defaultCenter: { lat: 33.82128, lng: -83.876151 },
	defaultZoom: 15,
	// googleMapsApiKey,
	// https://github.com/google-map-react/google-map-react
};

const contactMapStyles = css`
	height: 400px;
`;

const ContactMap = () => (
	<Row css={contactMapStyles}>
		<p>This is the map below</p>
		<GoogleMap {...googleMapOptions}></GoogleMap>
	</Row>
);

export default ContactMap;
