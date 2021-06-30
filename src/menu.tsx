import React, { useCallback } from 'react'
import type {Color} from './typeColor'
import './menu.css'

interface LightSelectProps{
  activeColor: Color | 'none'; 
  onActiveColorChange: (newValue: Color) => void;
}

export function LightSelect({activeColor, onActiveColorChange}:LightSelectProps) {
  const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLSelectElement>) => {
       // event.preventDefault()
        const newValue = event.target.value as Color
        onActiveColorChange(newValue)
      }, 
      [onActiveColorChange]
    )

  return (
   <select className="lightDropDown" name="selectLight" id="lightNameSelector" onChange={handleChange}>
     <option className="dropDownOption" value="red" selected={"red" === activeColor}>Red</option>
     <option className="dropDownOption" value="yellow" selected={"yellow" === activeColor}>Yellow</option>
     <option className="dropDownOption" value="green" selected={"green" === activeColor}>Green</option>
   </select> 
  );
}

interface LightCheckboxProps {
  isBlinking: boolean; 
  onIsBlinkingChange: (newValue: boolean) => void; 
}

export const LightCheckbox = ({isBlinking, onIsBlinkingChange}: LightCheckboxProps) => {
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    //event.preventDefault()
    onIsBlinkingChange(event.target.checked)
  }, [onIsBlinkingChange])
  return (
    <label>
      <input
        type="checkbox"
        name="lightCheckBox"
        id="CheckBlink"
        checked={isBlinking}
        onChange={handleChange}
      />
      is blinking
    </label>
  )
}

interface LightMenuProps extends LightSelectProps, LightCheckboxProps {}

export const LightMenu = (props: LightMenuProps) => {
 return (
   <>
    <LightSelect onActiveColorChange={props.onActiveColorChange} activeColor={props.activeColor}/>
    <LightCheckbox onIsBlinkingChange={props.onIsBlinkingChange} isBlinking={props.isBlinking}/>
   </>
 )
}