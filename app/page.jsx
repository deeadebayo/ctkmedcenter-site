import Image from 'next/image'
import styles from './page.module.css'
import { getAllArticles } from './lib/api'
import { getEntries } from './lib/testApi'

export const metadata = {
	title: {
		default: `Home`,
	},
}

const Home = async () => {
	const articles = await getAllArticles()

	const testArticles = await getEntries().then(entries =>
		console.log(JSON.stringify(entries))
	)

	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<p>body content</p>
			</div>
		</main>
	)
}

export default Home
