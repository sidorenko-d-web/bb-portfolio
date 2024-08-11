import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

import style from './footer.module.scss'



export function ContactItem({
	title,
	link,
	icon,
	type,
	content,
	index
}: {
	title: string
	link: string
	icon: string
	type: string
	content: string
	index: number
}) {
	const iconSize = 40

  const linkVariant = {
    animation:{
			width: 'auto',
			
      transition: {
        duration: 1,
        delay: index / 5,
        type: 'spring',
        stiffness: 50
      }
    },
    hover:{
      scale: 1.1,
    }
  }
	return (
		<motion.a
			className={style.link}
			href={link}
      variants={linkVariant}
			initial={{ width: iconSize}}
			whileInView='animation'
      whileHover='hover'
			viewport={{once: true}}
			type={type}
		>
			<Image
				src={icon}
				width={iconSize}
				height={iconSize}
				alt={title}
			/>
			{content}
			<Image
				src={icon}
				width={iconSize}
				height={iconSize}
				alt={title}
			/>
		</motion.a>
	)
}
