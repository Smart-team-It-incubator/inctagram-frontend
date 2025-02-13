'use client'



export type Props = {
    photo: string
}

export const Avatar = ({ photo }: Props) => {

    return (
        <div>
            {photo ? <img src={photo} width={'204px'} /> : 'Нет фото'}
        </div>
    )
}