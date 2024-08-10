'use client'

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
		<div className={style.portfolioItem}>
			<h3 className={style.headline}>{item.title}</h3>
			<InteractiveBlock
				item={item}
				isLine={isLine}
				index={index}
				closeDesc={closeDesc}
			/>
			<div className={style.linkBtns}>
				<a
					className={style.gitBtn}
					href={item.githubLink}
				>
					github
				</a>
				<a
					className={style.projectBtn}
					href={item.link}
				>
					На проект
				</a>
			</div>
			<button
				onClick={openDesc}
				className={style.descBtn}
			>
				Подробнее об реализации
			</button>
		</div>
	)
}
