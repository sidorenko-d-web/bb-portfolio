import type { Metadata } from 'next'

import './global.css'

export const metadata: Metadata = {
	title: 'Web dev Дмитрий',
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
