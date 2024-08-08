import { createClient } from '@vercel/kv'

import { data } from './data'
import { IItem } from './portfolio-item/PortfolioItem'
import { PortfolioItem } from './portfolio-item/PortfolioItem'
import style from './portfolio.module.scss'

export async function Portfolio() {
	return (
		<div className={style.portfolio}>
			<h2 className={style.headline}>Стек и портфолио</h2>
			<h3 className={style.subheadline}>
				Мои проекты с описанием используемых технологий
			</h3>

			<div className={style.portfolioList}>
				{data.map(item => (
					<PortfolioItem
						item={item}
						key={item.title}
					/>
				))}
			</div>
		</div>
	)
}
