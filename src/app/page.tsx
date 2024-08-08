import { Inter } from 'next/font/google'

import { Experience } from '@/components/experience/Experience'
import { Footer } from '@/components/footer/Footer'
import { Landing } from '@/components/landing/Landing'
import { Portfolio } from '@/components/portfolio/Portfolio'

import styles from './page.module.scss'

const inter = Inter({ subsets: ['cyrillic'] })

export default function Home() {
	return (
		<div className={inter.className}>
			<main className={styles.main}>
				<h1 className={styles.headline}>Резюме</h1>
				<Landing />
				<Portfolio />
				<Experience />
			</main>
			<Footer/>
		</div>
	)
}
