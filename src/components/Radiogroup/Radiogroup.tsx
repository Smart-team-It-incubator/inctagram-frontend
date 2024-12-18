import React from 'react'

import * as Radio from '@radix-ui/react-radio-group'

import styles from './radiogroup.module.scss'

type Data = {
  disabled: boolean
  id: string
  title: string
}

type Props = {
  data?: Data[]
}

export const Radiogroup = ({ data }: Props) => (
  <form>
    <Radio.Root
      aria-label={'View density'}
      className={styles.radiogroup_root}
      defaultValue={data && data.length !== 0 ? data[0].title : ''}
    >
      {data?.length === 0 ? (
        <div>There is no data</div>
      ) : (
        data?.map(radio => {
          return (
            <div className={styles.radiogroup_wrapper} key={radio.id}>
              <div className={styles.radiogroup}>
                <Radio.Item
                  className={styles.radiogroup_item}
                  disabled={radio.disabled}
                  id={radio.id}
                  value={radio.title}
                >
                  <Radio.Indicator
                    aria-disabled
                    className={
                      radio.disabled
                        ? `${styles.radiogroup_indicator} + ${styles.radiogroup_indicator_disabled}`
                        : styles.radiogroup_indicator
                    }
                  />
                </Radio.Item>
              </div>
              <label
                className={
                  radio.disabled
                    ? `${styles.radiogroup_label} + ${styles.radiogroup_label_disabled}`
                    : styles.radiogroup_label
                }
                htmlFor={radio.id}
              >
                {radio.title ? radio.title : ''}
              </label>
            </div>
          )
        })
      )}
    </Radio.Root>
  </form>
)
