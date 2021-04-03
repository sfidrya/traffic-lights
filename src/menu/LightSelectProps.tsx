import React, { useCallback } from "react";
import { Color } from "../typeColor";

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
     <option className="dropDownOption" value="none" selected={"none" === activeColor}>None</option>
     <option className="dropDownOption" value="red" selected={"red" === activeColor}>Red</option>
     <option className="dropDownOption" value="yellow" selected={"yellow" === activeColor}>Yellow</option>
     <option className="dropDownOption" value="green" selected={"green" === activeColor}>Green</option>
   </select> 
  );
}
