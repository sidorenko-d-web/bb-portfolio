import { ContactItem } from './contactItem'
import style from './footer.module.scss'

const links = [
	{
		title: 'github',
		link: 'https://github.com/sidorenko-d-web',
		icon: '/icons/githubIcon.svg',
		type: '',
		content: 'github.com/sidorenko-d-web'
	},
	{
		title: 'mail',
		link: 'mailto:sidorenko.d.web@gmail.com',
		icon: '/icons/mailIcon.svg',
		type: 'email',
		content: 'sidorenko.d.web@gmail.com'
	},
	{
		title: 'tg',
		link: 'https://t.me/dm1trysidorenko',
		icon: '/icons/tgIcon.svg',
		type: '',
		content: 't.me/dm1trysidorenko'
	},
	{
		title: 'phone',
		link: 'tel:89220353733',
		icon: '/icons/phoneIcon.svg',
		type: 'phone',
		content: '+7 922-035-37-33'
	}
]

export function Footer() {
	return (
		<div className={style.footer}>
			<h2 className={style.headline}>Контакты</h2>
			{links.map((elem, index) => (
				<ContactItem
					key={elem.title}
					title={elem.title}
					link={elem.link}
					icon={elem.icon}
					type={elem.type}
					content={elem.content}
					index={index}
				/>
			))}
		</div>
	)
}
