'use client'

import clsx from 'clsx'
import parse from 'html-react-parser'
import { LegacyRef, RefObject, useEffect, useRef, useState } from 'react'

import styles from './experienceItem.module.scss'

export function ExperienceItem({
	elem,
	lineHeight,
	index
}: {
	elem: { title: string; desc: string }
	lineHeight: number
	index: number
}) {
	const [height, setHeight] = useState(0)
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (ref.current) setHeight(ref.current.clientHeight)
	})

	return (
		<div
			className={clsx(styles.expItem, 'exp-item')}
			ref={ref}
		>
			<div className={styles.icon}>
				<div
					className={styles.line}
					style={{ height: lineHeight, zIndex: 100 - index }}
				></div>
			</div>
			<div className={styles.content}>
				<h3 className={styles.headline}>{elem.title}</h3>
				<p className={styles.text}>{elem.desc && parse(elem.desc)}</p>
			</div>
		</div>
	)
}
