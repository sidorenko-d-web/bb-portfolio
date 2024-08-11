import clsx from 'clsx'
import { Fira_Code } from 'next/font/google'
import { ReactTyped } from 'react-typed'

import styles from './code.module.scss'

const firaCode = Fira_Code({ subsets: ['latin'] })

export function Code() {
	return (
		<div className={clsx(firaCode.className, styles.code)}>
			<ReactTyped
				strings={['<p>{</p>']}
				typeSpeed={1}
				showCursor={false}
			/>
			<p className={styles.lines}>
				<ReactTyped
					startDelay={500}
					typeSpeed={50}
					strings={['name: <text>"Dmitry"</text>,']}
					showCursor={false}
				/>
			</p>
			<p className={styles.lines}>
				<ReactTyped
					startDelay={2600}
					typeSpeed={50}
					strings={['age: <number>19</number>,']}
					showCursor={false}
				/>
			</p>
			<p className={styles.lines}>
				<ReactTyped
					startDelay={4000}
					typeSpeed={50}
					strings={['profession:']}
					showCursor={false}
				/>
			</p>
			<span className={styles.textWraped}>
				<ReactTyped
					startDelay={5000}
					typeSpeed={50}
					strings={['<text>"Fullstack dev"</text>,']}
					showCursor={false}
				/>
			</span>
			<p className={styles.lines}>
				<ReactTyped
					startDelay={6500}
					typeSpeed={50}
					strings={['experience:']}
					showCursor={false}
				/>
			</p>
			<span className={styles.textWraped}>
				<ReactTyped
					startDelay={7800}
					typeSpeed={50}
					strings={['<text>"1 year"</text>']}
					showCursor={false}
				/>
			</span>
			<ReactTyped
				strings={['<p>}</p>']}
				typeSpeed={50}
				startDelay={300}
				showCursor={false}
			/>
		</div>
	)
}
