import { RefObject, useEffect, useState } from 'react'

export function useCalcLineHeight(ref: RefObject<HTMLDivElement>) {
	const [lineHeights, setLineHeights] = useState<number[]>([])
  
	useEffect(() => {
		if (ref.current === null) return

		const elems: Element[] = Array.prototype.slice.call(
			ref.current?.getElementsByClassName('exp-item')
		)
		const heights: number[] = []

		for (let i = 0; i < elems.length - 1; i++) {
			heights.push(
				(elems[i].clientHeight + elems[i + 1].clientHeight) / 2 + 16 + 15
			)
		}

		setLineHeights(heights)
	}, [ref])

	return { lineHeights }
}
