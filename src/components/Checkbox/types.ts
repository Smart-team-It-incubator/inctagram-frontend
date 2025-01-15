export type Data = {
  checked: boolean
  className?: string
  disabled?: boolean
  id: string
  onChange: (event: any) => void
  title: any
}

export type CheckBoxProps = {
  data?: Data[]
}
