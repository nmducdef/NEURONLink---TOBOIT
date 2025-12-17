import LocalStorageServiceImpl from '@/infrastructure/services/LocalStorageServiceImpl'
import { AppRoutes } from '@/shared/appRoutes'
import { Constants } from '@/shared/constants'
import { Navigate, Outlet } from 'react-router-dom'

interface Props {
  children?: React.ReactNode
}

const PublicRoute = ({ children }: Props) => {
  const localStorageService = new LocalStorageServiceImpl()
  const token = localStorageService.readStorage(Constants.API_TOKEN_STORAGE)

  if (token) {
    return <Navigate to={AppRoutes.PRIVATE.TRANG_CHU} replace />
  }

  return children ? <>{children}</> : <Outlet />
}

export default PublicRoute
