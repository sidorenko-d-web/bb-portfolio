import Image from 'next/image'

import style from './footer.module.scss'

export function Footer() {
	const iconSize = 35

	return (
		<div className={style.footer}>
			<h2 className={style.headline}>Контакты</h2>
			<a
				className={style.link}
				href='https://github.com/sidorenko-d-web'
			>
				<Image
					src={'/icons/githubIcon.svg'}
					width={iconSize}
					height={iconSize}
					alt='github'
				/>
				github.com/sidorenko-d-web
				<Image
					src={'/icons/githubIcon.svg'}
					width={iconSize}
					height={iconSize}
					alt='github'
				/>
			</a>
			<a
				className={style.link}
				href='mailto:sidorenko.d.web@gmail.com'
				type='email'
			>
				<Image
					src={'/icons/mailIcon.svg'}
					width={iconSize}
					height={iconSize}
					alt='mail'
				/>
				sidorenko.d.web@gmail.com
				<Image
					src={'/icons/mailIcon.svg'}
					width={iconSize}
					height={iconSize}
					alt='mail'
				/>
			</a>

			<a
				className={style.link}
				href='https://t.me/dm1trysidorenko'
			>
				<Image
					src={'/icons/tgIcon.svg'}
					width={iconSize}
					height={iconSize}
					alt='tg'
				/>
				t.me/dm1trysidorenko
				<Image
					src={'/icons/tgIcon.svg'}
					width={iconSize}
					height={iconSize}
					alt='tg'
				/>
			</a>

			<a
				className={style.link}
				href='tel:89220353733'
				type='phone'
			>
				<Image
					src={'/icons/phoneIcon.svg'}
					width={iconSize}
					height={iconSize}
					alt='phone'
				/>
				+7 922-035-37-33
				<Image
					src={'/icons/phoneIcon.svg'}
					width={iconSize}
					height={iconSize}
					alt='phone'
				/>
			</a>
		</div>
	)
}
