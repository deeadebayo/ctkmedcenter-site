// Set a variable that contains all the fields needed for articles when a fetch for
// content is performed
const ARTICLE_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  slug
  summary
  details {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
  date
  categoryName
`

async function fetchGraphQL(query, preview = false) {
	return fetch(
		`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${
					preview
						? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
						: process.env.CONTENTFUL_ACCESS_TOKEN
				}`,
			},
			body: JSON.stringify({ query }),
			next: { tags: ['articles'] },
		}
	).then(response => response.json())
}

function extractArticleEntries(fetchResponse) {
	return fetchResponse?.data?.knowledgeArticleCollection?.items
}

export async function getAllArticles(
	// For this demo set the default limit to always return 3 articles.
	limit = 3,
	// By default this function will return published content but will provide an option to
	// return draft content for reviewing articles before they are live
	isDraftMode = false
) {
	const articles = await fetchGraphQL(
		`query {
        knowledgeArticleCollection(where:{slug_exists: true}, order: date_DESC, limit: ${limit}, preview: ${
			isDraftMode ? 'true' : 'false'
		}) {
          items {
            ${ARTICLE_GRAPHQL_FIELDS}
          }
        }
      }`,
		isDraftMode
	)
	return extractArticleEntries(articles)
}

export async function getArticle(slug, isDraftMode = false) {
	const article = await fetchGraphQL(
		`query {
        knowledgeArticleCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
			isDraftMode ? 'true' : 'false'
		}) {
          items {
            ${ARTICLE_GRAPHQL_FIELDS}
          }
        }
      }`,
		isDraftMode
	)
	return extractArticleEntries(article)[0]
}