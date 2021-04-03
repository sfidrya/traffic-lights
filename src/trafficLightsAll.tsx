import React, {useCallback, useState} from 'react';
//import './trafficLightsAll.css';
import {TrafficLights} from './trafficLights'
import {LightMenu} from './menu/LightMenu'
import type {Color} from './typeColor'


export const TrafficLightsAll = () => {
  const [activeColor, setActiveColor] = useState<Color>("red")
  const [isBlinking, setIsBlinking] = useState(false)
  const [isAutoSwitch, setIsAutoSwitch] = useState(false)

  const handleActiveColorChange = useCallback((newValue: Color) => {
    setActiveColor(newValue)
  }, [])

  const handleIsBlinkingChange = useCallback((newValue: boolean) => {
    setIsBlinking(newValue)
  }, [])

  const handleIsAutoSwitchChange = useCallback((newValue: boolean) => {
    setIsAutoSwitch(newValue)
  }, [])

  return (
    <>
      <TrafficLights activeColor={activeColor} isBlinking={isBlinking}/>
      <LightMenu 
        activeColor={activeColor} 
        isBlinking={isBlinking} 
        isAutoSwitch={isAutoSwitch}
        onIsActiveColorChange={handleActiveColorChange} 
        onIsBlinkingChange={handleIsBlinkingChange}
        onIsAutoSwitchChange={handleIsAutoSwitchChange}
      />
    </>
  )
}