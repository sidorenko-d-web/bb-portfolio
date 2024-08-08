import timerHover from '../../../public/portfolio/bb-timer-hover.jpg'
import timer from '../../../public/portfolio/bb-timer.jpg'
import apteka from '../../../public/portfolio/lifefarm.jpg'
import oldTimerHover from '../../../public/portfolio/old-timer-hover.jpg'
import oldTimer from '../../../public/portfolio/old-timer.jpg'
import uno from '../../../public/portfolio/uno-game.jpg'

export const data = [
	{
		title: 'bb-timer',
		imgSrc: timer.src,
		hoverImgSrc: timerHover.src,
		link: 'https://bb-timer.vercel.app/auth',
		githubLink: 'https://github.com/sidorenko-d-web/timer-next-client',
		desc: 'Данный проект решает важную проблему, при занятиях спидкубингом* - сохранение каждого результата на сервере. Ни один из популярных, в наши дни, таймеров, не позволяет бесшовно сохранить всё и иметь доступ к результатам с любой платформы. В будущем планируется мобильная адаптация, React Native  приложение, соц составляющая: чаты, соревнования, лидерборды Спидкубинг* - сборка кубика Рубика на скорость',
		front: [
			'TypeScript',
			'Next.JS',
			'ReactHookForm',
			'Axios',
			'React Query',
			'Zustand',
			'TailwindCSS'
		],
		back: ['TypeScript', 'Nest.JS', 'PostgreSQL', 'prismaORM', 'passportJWT']
	},
	{
		title: 'Аптека ЖизньФарм',
		imgSrc: apteka.src,
		hoverImgSrc: '/_next/static/media/bb-timer-hover.9aa63dbd.jpg',
		link: '',
		githubLink: 'https://github.com/sidorenko-d-web/lifefarm',
		desc: '',
		front: ['TypeScript', 'React.JS', 'ReactHookForm', 'Axios', 'TailwindCSS'],
		back: ['TypeScript', 'Express.JS', 'mongodb', 'mongooseORM']
	},
	{
		title: 'Uno',
		imgSrc: uno.src,
		hoverImgSrc: '/_next/static/media/bb-timer-hover.9aa63dbd.jpg',
		link: '',
		githubLink: 'https://github.com/sidorenko-d-web/card_game',
		desc: '',
		front: ['JavaScript', 'React.JS', 'Vite'],
		back: ['JavaScript', 'Express.JS', 'SocketIO']
	},
	{
		title: 'Timer v1',
		imgSrc: oldTimer.src,
		hoverImgSrc: oldTimerHover.src,
		link: 'https://timer-vu26.onrender.com/',
		githubLink: 'https://github.com/sidorenko-d-web/timer',
		desc: '',
    front: [],
		back: [
			'JavaScript',
			'Express.JS',
			'EJSView',
			'SocketIO',
			'Mongodb',
			'MongooseORM'
		]
	}
]
