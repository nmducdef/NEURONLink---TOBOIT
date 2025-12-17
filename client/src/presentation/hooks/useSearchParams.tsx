import { useSearchParams as useRouterSearchParams } from 'react-router-dom'

interface SearchParamsUtils {
  getParam: (key: string) => string | null
  setParam: (key: string, value: string | number | null) => void
  setParams: (params: Record<string, string | number | null>) => void
  removeParam: (key: string) => void
  clearParams: () => void
  hasParam: (key: string) => boolean
  getAllParams: () => Record<string, string>
}

export const useQueryParams = (): [URLSearchParams, SearchParamsUtils] => {
  const [search, setSearch] = useRouterSearchParams()

  const getParam = (key: string) => search.get(key)

  const setParam = (key: string, value: string | number | null) => {
    setSearch((prev) => {
      const newSearch = new URLSearchParams(prev)
      if (value == null || value === '') {
        newSearch.delete(key)
      } else {
        newSearch.set(key, String(value))
      }
      return newSearch
    })
  }

  const setParams = (params: Record<string, string | number | null>) => {
    setSearch((prev) => {
      const newSearch = new URLSearchParams(prev)
      Object.entries(params).forEach(([key, value]) => {
        if (value == null || value === '') {
          newSearch.delete(key)
        } else {
          newSearch.set(key, String(value))
        }
      })
      return newSearch
    })
  }

  const removeParam = (key: string) => {
    setSearch((prev) => {
      const newSearch = new URLSearchParams(prev)
      newSearch.delete(key)
      return newSearch
    })
  }

  const clearParams = () => {
    setSearch(new URLSearchParams())
  }

  const hasParam = (key: string) => search.has(key)

  const getAllParams = () => {
    const params: Record<string, string> = {}
    search.forEach((value, key) => {
      params[key] = value
    })
    return params
  }

  return [
    search,
    {
      getParam,
      setParam,
      setParams,
      removeParam,
      clearParams,
      hasParam,
      getAllParams
    }
  ]
}

export default useQueryParams
