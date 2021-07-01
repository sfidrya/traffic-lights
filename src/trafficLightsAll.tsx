import React, {useCallback, useEffect, useState} from 'react';
//import './trafficLightsAll.css';
import {TrafficLights} from './trafficLights'
import {LightMenu} from './menu/LightMenu'
import type {Color} from './typeColor'


export const TrafficLightsAll = () => {
  const [activeColor, setActiveColor] = useState<Color | 'none'>('red')
  const [isBlinking, setIsBlinking] = useState(false)
  const [isAutoSwitch, setIsAutoSwitch] = useState(false)
  const [autoSwitchColor, setAutoSwitchColor] = useState<Color> ('red')

  useEffect(() => {
    function autoSwitch() {
      if (autoSwitchColor === 'green') {
       setAutoSwitchColor('yellow')
      }  else if (autoSwitchColor === 'yellow') {
        setAutoSwitchColor ('red') 
      } else {
        setAutoSwitchColor('green')
      }
      console.log('autoSwitch worked')
    }
    if (isAutoSwitch) {
      const autoSwitchTimer = setTimeout(autoSwitch, 3000)
      return function cleanup() {
        clearTimeout(autoSwitchTimer)
        console.log('CLEARED TIMEOUT')
      }
    } 
  }
  , 
  [autoSwitchColor, isAutoSwitch])
  

  const handleActiveColorChange = useCallback((newValue: Color | 'none') => {
    setActiveColor(newValue)
  }, [])

  const handleIsBlinkingChange = useCallback((newValue: boolean) => {
    setIsBlinking(newValue)
  }, [])

  const handleIsAutoSwitchChange = useCallback((newValue: boolean) => {
    setIsAutoSwitch(newValue)
    setAutoSwitchColor('red')
  }, [])


  return (
    <>
      <TrafficLights activeColor={activeColor} isBlinking={isBlinking}/>
      <TrafficLights activeColor={isAutoSwitch ? autoSwitchColor : activeColor} isBlinking={isBlinking}/>
      <LightMenu 
        activeColor={activeColor} 
        isBlinking={isBlinking} 
        isAutoSwitch={isAutoSwitch}
        onActiveColorChange={handleActiveColorChange} 
        onIsBlinkingChange={handleIsBlinkingChange}
        onIsAutoSwitchChange={handleIsAutoSwitchChange}
      />
    </>
  )
}