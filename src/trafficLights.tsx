import React from "react";
import "./trafficLights.css"
import {LightBlinking, LightMode} from './lights'
import type {Color} from './typeColor'

interface trafficLightsProps {
  activeColor: Color | 'none'; 
  isBlinking: boolean; 
}

export const TrafficLights = ({activeColor, isBlinking}: trafficLightsProps) => {
  const isRedColorOn = activeColor === "red"
  let redMode = LightMode.off
  if (isRedColorOn) {
    redMode = isBlinking ? LightMode.blinking : LightMode.on
  }
  const isYellowColorOn = activeColor === "yellow"
  let yellowMode = LightMode.off
  if (isYellowColorOn) {
    yellowMode = isBlinking ? LightMode.blinking : LightMode.on
  }
  const isGreenColorOn = activeColor === "green"
  let greenMode = LightMode.off
  if (isGreenColorOn) {
    greenMode = isBlinking ? LightMode.blinking : LightMode.on
  }
  return (
    <div className="flex-container trafficLights">
      <LightBlinking color="red" mode={redMode}/>
      <LightBlinking color="yellow" mode={yellowMode}/>
      <LightBlinking color="green" mode={greenMode}/>
    </div>
  )
}