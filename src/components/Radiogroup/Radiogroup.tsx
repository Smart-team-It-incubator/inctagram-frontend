import React from 'react'

import { RadiogroupProps } from '@/components/Radiogroup/types'
import * as Radio from '@radix-ui/react-radio-group'

import styles from './radiogroup.module.scss'

export const Radiogroup = ({ data }: RadiogroupProps) => (
  <form>
    <Radio.Root
      aria-label={'View density'}
      className={styles.radiogroup_root}
      defaultValue={data && data.length !== 0 ? data[0].title : ''}
    >
      {!data || !data.length ? (
        <div>There is no data</div>
      ) : (
        data?.map(radio => {
          const { disabled, id, title } = radio
          const indicatorDisabled = disabled
            ? `${styles.radiogroup_indicator} + ${styles.radiogroup_indicator_disabled}`
            : styles.radiogroup_indicator
          const labelDisabled = disabled
            ? `${styles.radiogroup_label} + ${styles.radiogroup_label_disabled}`
            : styles.radiogroup_label

          return (
            <div className={styles.radiogroup_wrapper} key={id}>
              <div className={styles.radiogroup}>
                <Radio.Item
                  className={styles.radiogroup_item}
                  disabled={disabled}
                  id={id}
                  value={title}
                >
                  <Radio.Indicator aria-disabled className={indicatorDisabled} />
                </Radio.Item>
              </div>
              <label className={labelDisabled} htmlFor={id}>
                {title ? title : ''}
              </label>
            </div>
          )
        })
      )}
    </Radio.Root>
  </form>
)
