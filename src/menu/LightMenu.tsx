import React from 'react'
import type {Color} from '../typeColor'
import './LightMenu.css'
import { LightSelect } from './LightSelectProps'
import { Checkbox } from './Checkbox'

interface LightMenuProps {
  activeColor: Color | 'none'
  isBlinking: boolean
  isAutoSwitch: boolean

  onIsActiveColorChange: (activeColor: Color) => void
  onIsBlinkingChange: (isBlinking: boolean) => void
  onIsAutoSwitchChange: (isAutoSwitch: boolean) => void
}

export const LightMenu = (props: LightMenuProps) => {
 return (
   <>
    <LightSelect onActiveColorChange={props.onIsActiveColorChange} activeColor={props.activeColor}/>
    <Checkbox labelText="is blinking" onIsActiveChange={props.onIsBlinkingChange} isActive={props.isBlinking}/>
    <Checkbox labelText="autoswitch" onIsActiveChange={props.onIsAutoSwitchChange} isActive={props.isAutoSwitch}/>
   </>
 )
}