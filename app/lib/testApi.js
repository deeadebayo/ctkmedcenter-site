import { createClient } from 'contentful'

const client = createClient({
	space: 'vp7vga6ceovq',
	accessToken: 'qT9diGWfCEuey5pI5vzrelL70Gx33pC4YesGRZaIMno',
})

export const getEntries = async () => {
	console.log(`fetching entries on client`)
	client
		.getEntries({
			limit: 200,
			order: 'sys.createdAt',
		})
		.then(entries => console.log(JSON.stringify(entries)))
}
