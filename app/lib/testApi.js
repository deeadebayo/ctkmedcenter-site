import { createClient } from 'contentful'

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export const getAllArticles = async () => {
	const articles = await client.getEntries({
		limit: 200,
		order: 'sys.createdAt',
	})

	return {
		props: {
			data: articles,
		},
	}
}

export const getOneArticle = async entryId => {
	const article = await client.getEntry(entryId)

	return {
		props: {
			data: article,
		},
	}
}
