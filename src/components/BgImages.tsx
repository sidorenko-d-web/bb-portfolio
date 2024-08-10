import img6 from '../../public/bg/githubIcon.svg'
import img5 from '../../public/bg/nestIcon.svg'
import img4 from '../../public/bg/reactIcon.svg'
import { RectCR } from '../../public/bg/rect-c-r'
import { RectUL } from '../../public/bg/rect-u-l'
import { RectUR } from '../../public/bg/rect-u-r'
import { motion } from 'framer-motion' 

import styles from './page.module.scss'

export function BgImages() {
	return (
		<>
			<RectUL />
			<RectUR />
			<RectCR />
			<motion.img
				animate={{scale:[0.99, 1.01, 0.99]}}
				transition={{repeat:Infinity, duration: 6, ease: 'easeInOut'}}
				src={img4.src}
				className={styles.img4}
			/>
			<motion.img
			animate={{scale:[0.99, 1.01, 0.99]}}
			transition={{repeat:Infinity, duration: 6, ease: 'easeInOut', delay:1}}
				src={img5.src}
				className={styles.img5}
			/>
			<motion.img
			animate={{scale:[0.99, 1.01, 0.99]}}
			transition={{repeat:Infinity, duration: 6, ease: 'easeInOut',delay:2}}
				src={img6.src}
				className={styles.img6}
			/>
		</>
	)
}
