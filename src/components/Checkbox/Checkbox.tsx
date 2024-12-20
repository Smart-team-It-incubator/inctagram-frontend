import React from 'react'

import { CheckBoxProps } from '@/components/Checkbox/types'
import * as CheckboxDemo from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import styles from './checkbox.module.scss'

export const Checkbox = ({ data }: CheckBoxProps) => (
  <form>
    {!data || !data.length ? (
      <div>There is not data</div>
    ) : (
      data?.map(el => {
        const { disabled, id, title } = el
        const indicatorDisabled = disabled
          ? `${styles.checkbox_indicator} + ${styles.checkbox_indicator_disabled}`
          : styles.checkbox_indicator
        const labelDisabled = disabled
          ? `${styles.checkbox_label} + ${styles.checkbox_label_disabled}`
          : styles.checkbox_label

        return (
          <div className={styles.checkbox_wrapper} key={id}>
            <div className={styles.checkbox}>
              <CheckboxDemo.Root className={styles.checkbox_root} disabled={disabled} id={id}>
                <CheckboxDemo.Indicator className={indicatorDisabled}>
                  <CheckIcon />
                </CheckboxDemo.Indicator>
              </CheckboxDemo.Root>
            </div>
            <label className={labelDisabled} htmlFor={id}>
              {title}
            </label>
          </div>
        )
      })
    )}
  </form>
)
