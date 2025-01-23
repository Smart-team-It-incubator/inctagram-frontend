export type Data = {
  className?: string
  disabled?: boolean
  id: string
  title: any
  onChange: (checked: boolean) => void
  checked:boolean
}

export type CheckBoxProps = {
  data?: Data[]
}
