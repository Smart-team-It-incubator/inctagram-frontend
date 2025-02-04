import styles from './ExpandText.module.scss'
import {useState} from 'react';


type Props = {
    text: string
}

export const ExpandText = (props: Props) => {
    const {text} = props
    const [expanded, setExpanded] = useState(false)

    const lengthForShortText = 86; // макс кол-во символов, которые влезают в 3 строки(без учета ...Show more)
    const shortText = text.slice(0, lengthForShortText)


    return (
        <span className={styles.descriptionPhoto}>
            {expanded ? text : shortText}
            {!expanded && (
                <span className={styles.showMore} onClick={() => setExpanded(!expanded)}>...Show more</span>)}
            {expanded && (<span className={styles.showMore} onClick={() => setExpanded(!expanded)}>...Hide</span>)}
        </span>
    )
}
