'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import parse from 'html-react-parser'
import { useRef } from 'react'

import styles from './experienceItem.module.scss'

export function ExperienceItem({
	elem,
	lineHeight,
	index
}: {
	elem: { title: string; desc: string }
	lineHeight: number
	index: number
}) {
	const ref = useRef<HTMLDivElement>(null)

	return (
		<div
			className={clsx(styles.expItem, 'exp-item')}
			ref={ref}
		>
			<div className={styles.icon}>
				<motion.div
					className={styles.line}
					initial={{height:0}}
					animate={{height: lineHeight}}
					transition={{duration:1, delay: index}}
					style={{ zIndex: 100 - index }}
				></motion.div>
			</div>
			<div className={styles.content}>
				<h3 className={styles.headline}>{elem.title}</h3>
				<p className={styles.text}>{elem.desc && parse(elem.desc)}</p>
			</div>
		</div>
	)
}
