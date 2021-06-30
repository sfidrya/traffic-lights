import React, { useCallback } from "react"

interface CheckboxProps {
  labelText: string
  isActive: boolean 
  onIsActiveChange: (newValue: boolean) => void
}

export const Checkbox = ({labelText, isActive, onIsActiveChange}: CheckboxProps) => {
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    //event.preventDefault()
    onIsActiveChange(event.target.checked)
  }, [onIsActiveChange])
  return (
    <label>
      <input
        type="checkbox"
        id="CheckBlink"
        checked={isActive}
        onChange={handleChange}
      />
      { labelText }
    </label>
  )
}