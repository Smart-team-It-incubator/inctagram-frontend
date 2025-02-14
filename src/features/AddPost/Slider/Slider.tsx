import * as Slider from '@radix-ui/react-slider'
import './SliderStyles.css'
import { useEffect, useState } from 'react'

type Props = {
  setValue: Function,
  min?: number,
  max?: number,
  step?: number
}
export const CustomSlider = ({setValue, min=1, max=3, step=0.1}: Props) => {
  const [sliderValue, setSliderValue] = useState(min)

  useEffect(() => {
    setValue(min)
    // console.log('Selected value:', value);
  }, [])


    const handleChange = (value: any) => {
        console.log('Selected value:', value);
        setValue(value)
      }

  return (
    <Slider.Root
      className="slider-root"
      defaultValue={[50]}
      min={min}
      max={max}
      step={step}
      aria-label="zoom"
      onValueChange={handleChange}
    >
      <Slider.Track className="slider-track">
        <Slider.Range className="slider-range" />
      </Slider.Track>
      <Slider.Thumb className="slider-thumb" />
    </Slider.Root>
  )
}
