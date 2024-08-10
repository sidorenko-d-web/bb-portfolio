import styles from '../../src/components/page.module.scss'
import { motion } from 'framer-motion'

export function RectCR() {
	return (
		<svg
			width='377'
			height='377'
			viewBox='0 0 377 377'
			fill='none'
      className={styles.img3}
		>
			<motion.rect
				x='194.512'
				y='1.41421'
				width='255.474'
				height='273'
				transform='rotate(45.0172 194.512 1.41421)'
				stroke='#3E3AFF'
				strokeWidth='2'
				strokeDasharray='10 10'
        animate={{strokeDashoffset: '100px'}}
        transition={{duration:8, repeat: Infinity, ease:'linear'}}
			/>
		</svg>
	)
}
