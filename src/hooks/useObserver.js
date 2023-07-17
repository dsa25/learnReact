import { useEffect, useRef } from "react"

export const useObserver = (ref, isLoading, canLoad, callback) => {
  const observer = useRef()

  useEffect(() => {
    if (isLoading) return // если идет загрузка постов, то ничего не делаем
    if (observer.current) observer.current.disconnect() // отлючаем observer, если он уже создан иначе создаем ...
    let cb = function (entries, observer) {
      if (entries[0].isIntersecting && canLoad) {
        callback()
      }
    }
    observer.current = new IntersectionObserver(cb)
    observer.current.observe(ref.current)
  }, [isLoading])
}
