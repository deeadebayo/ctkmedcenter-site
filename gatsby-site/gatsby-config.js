module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.ctkmedcenter.com/',
		defaultTitle:
			'Primary Care for Adults - Christ the King Medical Center',
			headline: 'Together, our Promise is your health',
		defaultDescription:
			"From regular physicals to preventative care, our internal medicine clinic manages all aspects of adult patients' health care. Discover primary care with a difference!",
		defaultBanner: './src/assets/banner.jpg',
		headline: 'headline',
		siteLanguage: 'en',
		author: '@superplur - superplur.com',
		facebook: 'https://www.facebook.com/pages/category/Family-Medicine-Practice/Christ-The-King-Medical-Center-1097848486978801/',
	},
	plugins: [
		`gatsby-plugin-emotion`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: 'gatsby-plugin-google-tagmanager',
			options: {
				id: 'GTM-WDMSTTN',
				includeInDevelopment: false,

				// datalayer to be set before GTM is loaded
				// should be an object or a function that is executed in the browser
				//
				// Defaults to null
				// defaultDataLayer: { platform: 'gatsby' },

				// Specify optional GTM environment details.
				// gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
				// gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
				// dataLayerName: 'YOUR_DATA_LAYER_NAME',

				// routeChangeEventName: 'YOUR_ROUTE_CHANGE_EVENT_NAME',
			},
		},
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
	],
};
