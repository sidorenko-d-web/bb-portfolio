'use client'

import { useRef } from 'react'

import styles from './experience.module.scss'
import { ExperienceItem } from './experienceItem/ExperienceItem'
import { useCalcLineHeight } from './useCalculateLinesHeight'

const data = [
	{
		title: 'Фриланс - 1 год',
		desc: `Кодер <br /> Отвечал за техническое исполнение заказов с фриланса по
	ТЗ на React.js. Верстка по макету, стили, разбивка на компоненты,
	запросы к API`
	},
	{
		title: 'Ваша компания',
		desc: `Здесь могли бы быть вы`
	} 
]

export function Experience() {
	const ref = useRef<HTMLDivElement>(null)
	const { lineHeights } = useCalcLineHeight(ref) //finds length for decorative lines

	return (
		<div className={styles.experience}>
			<h2 className={styles.headline}>Опыт работы</h2>
			<div
				className={styles.expList}
				ref={ref}
			>
				{data.map((elem, index) => (
					<ExperienceItem
						elem={elem}
						key={index}
						lineHeight={lineHeights[index] | 0}
						index={index}
					/>
				))}
			</div>
		</div>
	)
}
