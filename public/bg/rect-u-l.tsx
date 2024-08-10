import styles from '../../src/components/page.module.scss'
import { motion } from 'framer-motion'
export function RectUL() {
	return (
		<svg
			width='140'
			height='830'
			viewBox='0 0 140 830'
			fill='none'
      className={styles.img1}
		>
			<motion.rect
				x='1'
				y='1'
				width='138'
				height='828'
				stroke='#3E3AFF'
				strokeWidth='2'
				strokeDasharray='10 10'
        animate={{strokeDashoffset: '-100px'}}
        transition={{duration:8, repeat: Infinity, ease:'linear'}}
			/>
		</svg>
	)
}
