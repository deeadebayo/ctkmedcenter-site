import Image from 'next/image'
import styles from './page.module.css'
// import { getAllArticles } from './lib/api'
import { getAllArticles, getOneArticle } from './lib/testApi'

export const metadata = {
	title: {
		default: `Home`,
	},
}

const Home = async () => {
	console.log(JSON.stringify(getAllArticles()))
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<p>body content</p>
			</div>
		</main>
	)
}

export default Home
