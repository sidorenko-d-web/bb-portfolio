import styles from '../../src/components/page.module.scss'
import { motion } from 'framer-motion'

export function RectUR() {
	return (
		<svg
			width='258'
			height='177'
			viewBox='0 0 258 177'
			fill='none'
      className={styles.img2}
		>
			<motion.rect
				x='1'
				y='1'
				width='256'
				height='175'
				stroke='#3E3AFF'
				strokeWidth='2'
				strokeDasharray='10 10'
        animate={{strokeDashoffset: '100px'}}
        transition={{duration:8, repeat: Infinity, ease:'linear'}}
			/>
		</svg>
	)
}
