'use client'

import { delay, motion } from 'framer-motion'
import { type Dispatch, type SetStateAction, useState } from 'react'

import { InteractiveBlock } from './InteractiveBlock'
import style from './portfolio-item.module.scss'

export interface IItem {
	title: string
	imgSrc: string
	hoverImgSrc: string
	link: string
	githubLink: string
	desc: string
	front: string[] | undefined
	back: string[]
}

interface IPItem {
	item: IItem
	index: number
	setIsDescOpened: Dispatch<SetStateAction<number>>
}

export function PortfolioItem({ item, index, setIsDescOpened }: IPItem) {
	const [isLine, setIsLine] = useState(false)

	let isLeft = true

	if (index % 2 === 1) {
		isLeft = false
	}

	const openDesc = () => {
		setIsDescOpened(isLeft ? 1995 : -1995)
		setIsLine(true)
	}
	const closeDesc = () => {
		setIsDescOpened(0)
		setIsLine(false)
	}

	return (
		<motion.div className={style.portfolioItem}>
			<motion.h3
				initial={{ translateY: 10, opacity: 0 }}
				whileInView={{ translateY: 0, opacity: 1 }}
				transition={{ delay: index / 10, type: 'spring', stiffness: 300 }}
				viewport={{ once: true }}
				className={style.headline}
			>
				{item.title}
			</motion.h3>
			<InteractiveBlock
				item={item}
				isLine={isLine}
				index={index}
				closeDesc={closeDesc}
			/>
			<div className={style.linkBtns}>
				<motion.a
					initial={{ translateY: 10, opacity: 0 }}
					whileInView={{ translateY: 0, opacity: 1 }}
					transition={{
						delay: 0.2 + index / 10,
						type: 'spring',
						stiffness: 300
					}}
					viewport={{ once: true }}
					className={style.gitBtn}
					href={item.githubLink}
				>
					github
				</motion.a>
				<motion.a
					initial={{ translateY: 10, opacity: 0 }}
					whileInView={{ translateY: 0, opacity: 1 }}
					transition={{
						delay: 0.4 + index / 10,
						type: 'spring',
						stiffness: 300
					}}
					viewport={{ once: true }}
					className={style.projectBtn}
					href={item.link}
				>
					На проект
				</motion.a>
			</div>
			<motion.button
				initial={{ translateY: 10, opacity: 0 }}
				whileInView={{ translateY: 0, opacity: 1 }}
				transition={{ delay: 0.6 + index / 10, type: 'spring', stiffness: 300 }}
				viewport={{ once: true }}
				onClick={openDesc}
				className={style.descBtn}
			>
				Подробнее об реализации
			</motion.button>
		</motion.div>
	)
}