export const useStorage = () => {
  const getItem = key => localStorage.getItem(key)
  const setItem = (key, value) => localStorage.setItem(key, value)

  return { getItem, setItem }
}
