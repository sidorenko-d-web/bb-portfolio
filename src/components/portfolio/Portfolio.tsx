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
			<h2 className={style.headline}>Стек и портфолио</h2>
			<h3 className={style.subheadline}>
				Мои проекты с описанием используемых технологий
			</h3>

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
