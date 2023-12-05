import React, { useEffect, useState } from 'react'

export const useDebouncedValue = (input: string = '', delay: number = 500) => {

  const [debouncedValue, setDebouncedValue] = useState(input)

  useEffect(() => {

    const timeout = setTimeout(() => {
      setDebouncedValue(input)
    }, delay);

    // Reset timeout
    return () => { clearTimeout(timeout) }
  }, [input])

  return { debouncedValue }
}
