import Image from 'next/image'
import React from 'react'

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
			<div className={styles.about}>
				<h2 className={styles.headline}>О себе</h2>
				<p className={styles.text}>
					Вы когда-либо мечтали, иметь силу, создать все, что только пожелаете?
					Именно так я отношусь к своему делу. Обожаю <b>сложные</b> задачи,
					<b>интересные</b> проекты и <b>изучать</b> новые технологии.
				</p>
			</div>
		</div>
	)
}
