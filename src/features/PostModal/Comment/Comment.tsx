import { useState } from 'react'
import { Avatar } from '../Avatar/Avatar'
import s from './Comment.module.scss'

type Props = {}

export const Comment = () => {
  const [isSubcomment, setIsSubcomment] = useState<boolean>(false)

  const viewAnswers = () => {
    setIsSubcomment(!isSubcomment)
  }

  return (
    <div>
      <Commentator />
      <div className={s.answers}>
        {isSubcomment && <Commentator className={s.subcomment} />}

        <span className={s['view_answers']} onClick={viewAnswers}>
          {!isSubcomment ? 'View Answers (1)' : 'Side Answers'}
        </span>
      </div>
    </div>
  )
}

type PropsTalk = {
  nick: string
  text: string
  time: string
}

const Talk = ({ nick, text, time }: PropsTalk) => {
  return (
    <div className={s.wrapper}>
      <p>
        <span className={s.nick}>{nick}</span> {text}
      </p>
      <span className={s.countdown}>{time}</span>
    </div>
  )
}

type PropsCommentator = {
  className?: string
}

const Commentator = ({ className }: PropsCommentator) => {
  return (
    <div className={`${s.comment} ${className}`}>
      <Avatar src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg" />
      <Talk
        nick="Leo"
        text="Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        time="2 hours ago"
      />
    </div>
  )
}
