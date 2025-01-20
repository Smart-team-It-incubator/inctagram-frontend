import * as Slider from '@radix-ui/react-slider'
import './SliderStyles.css'

export const CustomSlider = () => {

    const handleChange = (value: any) => {
        console.log('Selected value:', value);
      }

  return (
    <Slider.Root
      className="slider-root"
      defaultValue={[50]}
      max={100}
      step={1}
      aria-label="Volume"
      onValueChange={handleChange}
    >
      <Slider.Track className="slider-track">
        <Slider.Range className="slider-range" />
      </Slider.Track>
      <Slider.Thumb className="slider-thumb" />
    </Slider.Root>
  )
}
