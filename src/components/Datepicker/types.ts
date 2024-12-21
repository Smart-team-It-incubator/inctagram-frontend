import { PropsRangeRequired, PropsSingleRequired } from 'react-day-picker'

export type SingleModeProps = Pick<PropsSingleRequired, 'mode' | 'onSelect' | 'selected'>
export type RangeModeProps = Pick<PropsRangeRequired, 'mode' | 'onSelect' | 'selected'>
export type DatePickerProps = { disabled?: boolean } & (RangeModeProps | SingleModeProps)
