import { motion } from 'framer-motion'
import { Dispatch, SetStateAction } from 'react'

import { data } from './data'
import { PortfolioItem } from './portfolio-item/PortfolioItem'
import style from './portfolio.module.scss'

export function Portfolio({
	setIsDescOpened
}: {
	setIsDescOpened: Dispatch<SetStateAction<number>>
}) {
	return (
		<div className={style.portfolio}>
			<motion.h2
				initial={{ opacity: 0, translateY: 20 }}
				whileInView={{ opacity: 1, translateY: 0 }}
				className={style.headline}
				viewport={{once: true}}
			>
				Стек и портфолио
			</motion.h2>
			<motion.h3
				initial={{ opacity: 0, translateY: 20 }}
				whileInView={{ opacity: 1, translateY: 0 }}
				transition={{ delay: 0.3 }}
				viewport={{once: true}}
				className={style.subheadline}
			>
				Мои проекты с описанием используемых технологий
			</motion.h3>

			<div className={style.portfolioList}>
				{data.map((item, index) => (
					<PortfolioItem
						item={item}
						key={item.title}
						setIsDescOpened={setIsDescOpened}
						index={index}
					/>
				))}
			</div>
		</div>
	)
}
