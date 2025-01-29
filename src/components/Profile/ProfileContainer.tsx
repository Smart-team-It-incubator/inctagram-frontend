'use client'

import { CSSProperties, useEffect, useState } from 'react'

type Props = {
    children: React.ReactNode
    style?: CSSProperties
    maxWidth?: string
    margin?: string
    className?:string
}

export const ProfileContainer = ({ style, maxWidth = '1280px', margin = '0 auto', children, className }: Props) => {

    const [dynamicMaxWidth, setDynamicMaxWidth] = useState<string>(maxWidth)

    useEffect(() => {
        const updateMaxWidth = () => {
            setDynamicMaxWidth(window.innerWidth < 500 ? '360px' : maxWidth)
        }

        updateMaxWidth()
        window.addEventListener('resize', updateMaxWidth)

        return () => {
            window.removeEventListener('resize', updateMaxWidth)
        }
    }, [maxWidth])

    return <div style={{ maxWidth: dynamicMaxWidth, margin, ...style }} className={className}>{children}</div>
}
