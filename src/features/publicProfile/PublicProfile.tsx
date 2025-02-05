'use client'

type Props = {
    userId: string
}

export const PublicProfile = (props: Props) => {
    const {userId} = props

    return (
        <div>
            <h1>Публичный профиль пользователя {userId}</h1>
        </div>
    )
}