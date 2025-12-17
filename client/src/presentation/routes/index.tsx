import AuthLayout from '@/presentation/layouts/auth-layout'
import MainLayout from '@/presentation/layouts/main-layout'
import ForbiddenPage from '@/presentation/pages/common/403'
import NotFoundPage from '@/presentation/pages/common/404'
import HomeView from '@/presentation/pages/features/home/home.view'
import PrivateRoute from '@/presentation/routes/private-route'
import PublicRoute from '@/presentation/routes/public-route'
import { AppRoutes } from '@/shared/appRoutes'
import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'

//Auth
const LoginPage = lazy(() => import('@/presentation/pages/auth/login/login.page'))

//QuanLyHeThong
const PatientManagePage = lazy(
  () => import('@/presentation/pages/features/quan-ly-he-thong/quan-ly-nguoi-benh/patient-manage.page')
)
const UserManagePage = lazy(
  () => import('@/presentation/pages/features/quan-ly-he-thong/quan-ly-nguoi-dung/user-manage.page')
)
const CenterManagePage = lazy(
  () => import('@/presentation/pages/features/quan-ly-he-thong/quan-ly-trung-tam/center-manage.page')
)

export const RootRouter = createBrowserRouter([
  {
    path: AppRoutes.PUBLIC.AUTH.LOGIN,

    element: (
      <PublicRoute>
        <AuthLayout />
      </PublicRoute>
    ),
    children: [
      {
        index: true,
        element: <LoginPage />
      }
    ]
  },

  {
    path: AppRoutes.ROOT,
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to={AppRoutes.PRIVATE.TRANG_CHU} replace />
      },
      {
        path: AppRoutes.PRIVATE.TRANG_CHU,
        element: <HomeView />
      },

      //Quan ly he thong
      {
        path: AppRoutes.PRIVATE.QUAN_LY_HE_THONG.QUAN_LY_BENH_NHAN,
        element: <PatientManagePage />
      },
      {
        path: AppRoutes.PRIVATE.QUAN_LY_HE_THONG.QUAN_LY_NGUOI_DUNG,
        element: <UserManagePage />
      },
      {
        path: AppRoutes.PRIVATE.QUAN_LY_HE_THONG.QUAN_LY_TRUNG_TAM,
        element: <CenterManagePage />
      }
    ]
  },

  {
    path: AppRoutes.FORBIDDEN_ACCESS,
    element: <ForbiddenPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
])
