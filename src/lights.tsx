import React, { useEffect, useState } from "react";
import "./lights.css"
import type {Color} from './typeColor'

const redLightOnClassName: string = 'red'
const redLightOffClassName: string = 'redOff'
const yellowLightOnClassName: string = 'yellow'
const yellowLightOffClassName: string = 'yellowOff'
const greenLightOnClassName: string = 'green'
const greenLightOffClassName: string = 'greenOff'

interface LightProps {
  color: Color; 
  isOn: boolean
}

export const Light = (props: LightProps) => {
    let lightClassName
    if (props.color === "red") {
      if (props.isOn) {
        lightClassName = redLightOnClassName
      } else {
        lightClassName = redLightOffClassName
      }
    } else if (props.color === "yellow") {
      if (props.isOn) {
        lightClassName = yellowLightOnClassName
      } else {
        lightClassName = yellowLightOffClassName
      }
    } else {
      if (props.isOn) {
        lightClassName = greenLightOnClassName
      } else {
        lightClassName = greenLightOffClassName
      }
    } 
    return <div className={"dot " + lightClassName}></div>;
}

export enum LightMode {
  on, 
  off, 
  blinking
}

interface LightBlinkingProps {
  color: Color; 
  mode: LightMode
}

export function LightBlinking({color, mode}: LightBlinkingProps) {
 const [isColorOn, changeIsColorOn] = useState(mode === LightMode.on)
  
  useEffect(() => {
    function blinker() {
      changeIsColorOn(prevIsColorOn => !prevIsColorOn)
    }
    if (mode === LightMode.blinking) { 
      const blinkTimer = setInterval(() => {blinker()}, 1000)
      return function cleanup() {
        clearInterval(blinkTimer)
      }
    } else {
      changeIsColorOn(mode === LightMode.on)
    }
  }, [mode])

  return (
    <Light color={color} isOn={isColorOn}/>
  )
}


/*exports.light = Light
exports.redLight = RedLight
exports.greenLight = GreenLight
exports.yellowLight = YellowLight*/