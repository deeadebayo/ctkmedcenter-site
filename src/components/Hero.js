import React from 'react';
import { Jumbotron, Carousel, Container } from 'react-bootstrap';

const Hero = () => (
	<Jumbotron fluid>
		<Carousel>
			<Carousel.Item>
				<img />
				<Container>
					<Carousel.Caption>
						<h1>Hi</h1>
						<h1>Hi</h1>
						<h1>Hi</h1>
					</Carousel.Caption>
				</Container>
			</Carousel.Item>
			<Carousel.Item>
				<img />
				<Carousel.Caption>
					<h1>Hey</h1>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	</Jumbotron>
);

export default Hero;
