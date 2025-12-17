import { AuthRepositoryImpl } from '@/infrastructure/repositories/AuthRepositoryImpl'
import { CenterRepositoryImpl } from '@/infrastructure/repositories/CenterRepositoryImpl'
import { type ReactNode, createContext, useContext, useMemo } from 'react'

// 1. Định nghĩa interface cho repositories
export interface RepositoryContainer {
  authRepository: ReturnType<typeof AuthRepositoryImpl>
  centerRepository: ReturnType<typeof CenterRepositoryImpl>
}

// 2. Tạo context với kiểu rõ ràng
const RepositoryContext = createContext<RepositoryContainer | undefined>(undefined)

// 3. Định nghĩa props cho Provider
interface RepositoryProviderProps {
  children: ReactNode
}

// 4. Triển khai Provider
export const RepositoryProvider = ({ children }: RepositoryProviderProps) => {
  const repositories = useMemo<RepositoryContainer>(
    () => ({
      authRepository: AuthRepositoryImpl(),
      centerRepository: CenterRepositoryImpl()
    }),
    []
  )

  return <RepositoryContext.Provider value={repositories}>{children}</RepositoryContext.Provider>
}

// 5. Tạo custom hook
export const useRepository = (): RepositoryContainer => {
  const context = useContext(RepositoryContext)
  if (!context) {
    throw new Error('useRepository must be used within a RepositoryProvider')
  }
  return context
}
