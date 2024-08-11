import { AnimatePresence, delay, motion } from 'framer-motion'
import parse from 'html-react-parser'
import React, { type Dispatch, type SetStateAction, useState } from 'react'

import { IItem } from './PortfolioItem'
import style from './portfolio-item.module.scss'

interface IIBlockProps {
	index: number
	item: IItem
	isLine: boolean
	closeDesc: () => void
}

export function InteractiveBlock({
	item,
	isLine,
	index,
	closeDesc
}: IIBlockProps) {
	let isLeft = true

	if (index % 2 === 1) {
		isLeft = false
	}

	const descVariants = {
		hidden: isLeft
			? { left: -1000 * 2, height: 0, opacity: 0 }
			: { right: -1000 * 2, height: 0, opacity: 0 },

		showed: {
			height: 'auto',
			opacity: 1,
			transition: {
				delay: 1.5
			}
		}
	}

	return (
		<motion.div
			className={style.imgWrapper}
			initial={{ translateY: 10, opacity: 0 }}
			whileInView={{ translateY: 0, opacity: 1 }}
			transition={{ delay: index / 10, type: 'spring', stiffness: 300 }}
			viewport={{ once: true }}
		>
			<img
				className={style.mainImg}
				src={item.imgSrc}
				alt='img'
			/>
			<img
				className={style.hoverImg}
				src={item.hoverImgSrc}
				alt='img'
			/>
			<AnimatePresence>
				{isLine && (
					<>
						<motion.svg
							transition={{ duration: 2 }}
							initial={{ viewBox: `0 0 0 2` }}
							animate={{ viewBox: `0 0 ${1200} 2` }}
							exit={{ viewBox: `0 0 0 2` }}
							className={isLeft ? style.wayToDescLeft : style.wayToDescRight}
							height='3'
							key={item.title + '-svg'}
						>
							<line
								y1='1'
								y2='1'
								x1='0'
								x2='1200'
								stroke='#3E3AFF'
								strokeWidth='2'
								strokeDasharray='10 10'
							/>
						</motion.svg>

						<motion.div
							className={style.desc}
							style={isLeft ? { left: -650 } : { right: -650 }}
							variants={descVariants}
							initial='hidden'
							animate='showed'
							exit='hidden'
							key={item.title + '-desc'}
						>
							<h3>Подробнее об {item.title}</h3>
							{item.front && (
								<>
									<h4>Front-end стек</h4>
									<ul>
										{item.front.map(elem => (
											<li key={elem}>{elem}</li>
										))}
									</ul>
									<h4>Back-end стек</h4>
									<ul>
										{item.back.map(elem => (
											<li key={elem}>{elem}</li>
										))}
									</ul>
									<h4>Об проекте</h4>
									<p>{parse(item.desc)}</p>
								</>
							)}
							<button onClick={closeDesc}>Вернуться</button>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</motion.div>
	)
}
