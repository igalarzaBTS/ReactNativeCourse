import React, { useState } from 'react'
import { Switch } from 'react-native'

interface Props {
  isOn: boolean;
  onChange: (enabled: boolean) => void;
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {

  const [isEnabled, setIsEnabled] = useState(isOn);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled)
    onChange(!isEnabled)

  }

  return (
    <Switch
      trackColor={{ false: 'gray', true: 'green' }}
      thumbColor={isEnabled ? 'green' : 'gray'}
      ios_backgroundColor="white"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  )
}
