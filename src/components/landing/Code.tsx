import clsx from 'clsx'
import { Fira_Code } from 'next/font/google'

import styles from './code.module.scss'

const firaCode = Fira_Code({ subsets: ['latin'] })

export function Code() {
	return (
		<div className={clsx(firaCode.className, styles.code)}>
			<p>{`{`}</p>
			<p className={styles.lines}>
				name: <span className={styles.text}>"Dmitry"</span>,
			</p>
			<p className={styles.lines}>
				age: <span className={styles.number}>19</span>,
			</p>
			<p className={styles.lines}>profession:</p>
			<span className={styles.textWraped}>"Fullstack dev"</span>,
			<p className={styles.lines}>experience:</p>
			<span className={styles.textWraped}>"1 year"</span>
			<p>{`}`}</p>
		</div>
	)
}
