'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import { Inter } from 'next/font/google'
import React, { useState } from 'react'

import { Experience } from '@/components/experience/Experience'
import { Footer } from '@/components/footer/Footer'
import { Landing } from '@/components/landing/Landing'
import { Portfolio } from '@/components/portfolio/Portfolio'

import { BgImages } from './BgImages'
import styles from './page.module.scss'

const inter = Inter({ subsets: ['cyrillic'] })

export function Index() {
	const [isDescOpened, setIsDescOpened] = useState(0)

	

	return (
		<div className={styles.wrapprer}>
			<motion.div
				className={clsx(inter.className)}
				animate={{ x: isDescOpened }}
				transition={{ duration: 3, type: 'spring', stiffness: 13}}
			>
				<BgImages />
				<main className={styles.main}>
					<h1 className={styles.headline}>Резюме</h1>
					<Landing />
					<Portfolio
						setIsDescOpened={setIsDescOpened}
					/>
					<Experience />
				</main>
				<Footer />
			</motion.div>
		</div>
	)
}
