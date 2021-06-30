import React, {useCallback, useState} from 'react';
//import './trafficLightsAll.css';
import {TrafficLights} from './trafficLights'
import {LightMenu} from './menu'
import type {Color} from './typeColor'


export const TrafficLightsAll = () => {
  const [activeColor, setActiveColor] = useState<Color | 'none'>('red')
  const [isBlinking, setIsBlinking] = useState(false)
  

  const handleActiveColorChange = useCallback((newValue: Color) => {
    setActiveColor(newValue)
  }, [])

  const handleIsBlinkingChange = useCallback((newValue: boolean) => {
    setIsBlinking(newValue)
  }, [])


  return (
    <>
      <TrafficLights activeColor={activeColor} isBlinking={isBlinking}/>
      <LightMenu 
        activeColor={activeColor} 
        isBlinking={isBlinking} 
        onActiveColorChange={handleActiveColorChange} 
        onIsBlinkingChange={handleIsBlinkingChange}
      />
    </>
  )
}