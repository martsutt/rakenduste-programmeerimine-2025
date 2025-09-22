import { useState } from "react"
import { getItem, setItem, removeItem } from "./localStorage"

export default function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const stored = getItem<T>(key)
    return stored !== undefined ? stored : initialValue
  })

  type DispatchAction<T> = T | ((prevState: T) => T)

  function handleDispatch(action: DispatchAction<T>) {
    if (typeof action === "function") {
      setValue(prevState => {
        const newValue = (action as (prevState: T) => T)(prevState)
        setItem(key, newValue)
        return newValue
      })
    } else {
      setValue(action)
      setItem(key, action)
    }
  }

  const clearState = () => {
    setValue(undefined as T)
    removeItem(key)
  }

  return [value, handleDispatch, clearState] as const
}
