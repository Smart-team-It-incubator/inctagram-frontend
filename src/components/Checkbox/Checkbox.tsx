import React from 'react'

import * as CheckboxDemo from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import styles from './checkbox.module.scss'

type Data = {
  disabled: boolean
  id: string
  title: string
}

type Props = {
  data?: Data[]
}

export const Checkbox = ({ data }: Props) => (
  <form>
    {data?.length === 0 ? (
      <div>There is not data</div>
    ) : (
      data?.map(el => {
        return (
          <div className={styles.checkbox_wrapper} key={el.id}>
            <div className={styles.checkbox}>
              <CheckboxDemo.Root className={styles.checkbox_root} disabled={el.disabled} id={el.id}>
                <CheckboxDemo.Indicator
                  className={
                    el.disabled
                      ? `${styles.checkbox_indicator} + ${styles.checkbox_indicator_disabled}`
                      : styles.checkbox_indicator
                  }
                >
                  <CheckIcon />
                </CheckboxDemo.Indicator>
              </CheckboxDemo.Root>
            </div>
            <label
              className={
                el.disabled
                  ? `${styles.checkbox_label} + ${styles.checkbox_label_disabled}`
                  : styles.checkbox_label
              }
              htmlFor={el.id}
            >
              {el.title}
            </label>
          </div>
        )
      })
    )}
  </form>
)
