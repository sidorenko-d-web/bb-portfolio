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

export function PortfolioItem({ item }: { item: IItem }) {
	return (
		<div className={style.portfolioItem}>
			<h3 className={style.headline}>{item.title}</h3>
			<div className={style.imgWrapper}>
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
			</div>
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
			<button className={style.descBtn}>Подробнее об реализации</button>
		</div>
	)
}
