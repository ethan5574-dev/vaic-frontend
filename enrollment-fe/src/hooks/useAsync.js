import { useEffect, useRef, useState, useCallback } from 'react'

/**
 * useAsync — runs an async fetcher on mount (and whenever deps change),
 * exposing { data, loading, error, reload }. Keeps every page's data-fetching
 * boilerplate identical so services can be swapped for real APIs later
 * without touching component logic.
 */
export function useAsync(fetcher, deps = []) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const mounted = useRef(true)

  const run = useCallback(() => {
    setLoading(true)
    setError(null)
    fetcher()
      .then((res) => mounted.current && setData(res))
      .catch((err) => mounted.current && setError(err))
      .finally(() => mounted.current && setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  useEffect(() => {
    mounted.current = true
    run()
    return () => {
      mounted.current = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return { data, loading, error, reload: run }
}
