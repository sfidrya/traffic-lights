import React from 'react'
import type {Color} from '../typeColor'
import { Checkbox } from './Checkbox'
import { LightSelect } from './LightSelect'
import './LightMenu.css'

interface LightMenuProps {
  activeColor: Color | 'none'
  isBlinking: boolean
  isAutoSwitch: boolean

  onActiveColorChange: (activeColor: Color | 'none') => void
  onIsBlinkingChange: (isBlinking: boolean) => void
  onIsAutoSwitchChange: (isAutoSwitch: boolean) => void
}

export const LightMenu = (props: LightMenuProps) => {
 return (
   <>
    <LightSelect onActiveColorChange={props.onActiveColorChange} activeColor={props.activeColor}/>
    <Checkbox labelText="is blinking" onIsActiveChange={props.onIsBlinkingChange} isActive={props.isBlinking}/>
    <Checkbox labelText="autoswitch" onIsActiveChange={props.onIsAutoSwitchChange} isActive={props.isAutoSwitch}/>
   </>
 )
}