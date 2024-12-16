import { ComponentPropsWithoutRef } from 'react'
import { ReactSVG } from 'react-svg'

import Image from 'next/image'
import Link from 'next/link'

import styles from './sidebar.module.scss'

import { IconsType } from './types'

type IconProps = {
  icon: IconsType
} & ComponentPropsWithoutRef<'a'>

export const Icon = ({ icon, ...rest }: IconProps) => {
  return (
    <>
      <Link href={'/'} {...rest}>
        <ReactSVG className={styles.iconImage} height={24} src={icon.paths[0]} width={24} />
        <div>{icon.text}</div>
      </Link>
    </>
  )
}
