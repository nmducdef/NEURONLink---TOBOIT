import { useRepository } from '@/di/RepositoriesProvider'
import type { QueryCenters } from '@/domain/model/Center'

export const useGetCenters = (params?: QueryCenters, enabled?: boolean) => {
  const { centerRepository } = useRepository()
  const query = centerRepository.getCenters(params, { enabled })

  return { query }
}
