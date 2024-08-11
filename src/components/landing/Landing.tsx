import { motion } from 'framer-motion'
import Image from 'next/image'

import { Code } from './Code'
import styles from './landing.module.scss'

export function Landing() {
	return (
		<div className={styles.landing}>
			<div className={styles.preview}>
				<Image
					src={'/my_photo.png'}
					width={300}
					height={300}
					alt='my photo'
					className=''
				/>
				<Code />
			</div>
			<motion.div
				initial={{
					rotateX: 20,
					rotateY: -20,
					opacity: 0
				}}
				animate={{
					rotateX:0,
					rotateY:0,
					opacity: 1
				}}
				transition={{ type: 'spring', stiffness:500, delay: 1, duration: .5}}
				className={styles.about}>
				<h2 className={styles.headline}>О себе</h2>
				<p className={styles.text}>
					Вы когда-либо мечтали, иметь силу, создать все, что только пожелаете?
					Именно так я отношусь к своему делу. Обожаю <b>сложные</b> задачи,
					<b> интересные</b> проекты и <b>изучать</b> новые технологии.
				</p>
			</motion.div>
		</div>
	)
}
