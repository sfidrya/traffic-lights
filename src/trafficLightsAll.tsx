import React, {useCallback, useEffect, useState} from 'react';
//import './trafficLightsAll.css';
import {TrafficLights} from './trafficLights'
import {LightMenu} from './menu/LightMenu'
import type {Color} from './typeColor'

enum trafficLightsAutoMode {
  greenMode, 
  greenBlinkingMode, 
  yellowFromGreeenMode,
  redMode, 
  yellowFromRedMode
}

export const TrafficLightsAll = () => {
  const [activeColor, setActiveColor] = useState<Color | 'none'>('red')
  const [isBlinking, setIsBlinking] = useState(false)
  const [isAutoSwitch, setIsAutoSwitch] = useState(false)
  const [autoSwitchColor, setAutoSwitchColor] = useState<Color> ('red')
  const [autoSwitchBlinking, setAutoSwitchBlinking] = useState(false)
  const [autoSwitchMode, setAutoSwitchMode] = useState<trafficLightsAutoMode> (trafficLightsAutoMode.redMode)

  

  useEffect(() => {
   

    function autoSwitch() {
      if (autoSwitchMode === trafficLightsAutoMode.greenMode) {
        setAutoSwitchMode(trafficLightsAutoMode.greenBlinkingMode)
        setAutoSwitchBlinking(true)  
      } else if (autoSwitchMode === trafficLightsAutoMode.greenBlinkingMode) {
       setAutoSwitchMode(trafficLightsAutoMode.yellowFromGreeenMode)
       setAutoSwitchColor('yellow')
       setAutoSwitchBlinking(false)
      }  else if (autoSwitchMode === trafficLightsAutoMode.yellowFromGreeenMode) {
        setAutoSwitchMode(trafficLightsAutoMode.redMode)
        setAutoSwitchColor('red') 
      } else if (autoSwitchMode === trafficLightsAutoMode.redMode) {
        setAutoSwitchMode(trafficLightsAutoMode.yellowFromRedMode)
        setAutoSwitchColor('yellow')
      } else if (autoSwitchMode === trafficLightsAutoMode.yellowFromRedMode) {
        setAutoSwitchMode(trafficLightsAutoMode.greenMode)
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
  [autoSwitchColor, isAutoSwitch, autoSwitchMode])
  

  const handleActiveColorChange = useCallback((newValue: Color | 'none') => {
    setActiveColor(newValue)
  }, [])

  const handleIsBlinkingChange = useCallback((newValue: boolean) => {
    setIsBlinking(newValue)
  }, [])

  const handleIsAutoSwitchChange = useCallback((newValue: boolean) => {
    setIsAutoSwitch(newValue)
    console.log('autoswitch changed', newValue)
    setAutoSwitchColor('red')
    setAutoSwitchBlinking(false)
    setAutoSwitchMode(trafficLightsAutoMode.redMode)
  }, [])


  return (
    <>
      <TrafficLights activeColor={isAutoSwitch ? autoSwitchColor : activeColor} isBlinking={isAutoSwitch ? autoSwitchBlinking : isBlinking}/>
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