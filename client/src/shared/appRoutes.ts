const Prefix = ''

export const AppRoutes = {
  ROOT: `${Prefix}/`,
  PERMISSION_DENIED: `${Prefix}/permission-denied`,
  FORBIDDEN_ACCESS: `${Prefix}/forbidden-access`,

  PUBLIC: {
    AUTH: {
      LOGIN: `${Prefix}/login`,
      REGISTER: `${Prefix}/auth/register`,
      FORGOT_PASSWORD: `${Prefix}/auth/forgot-password`,
      RESET_PASSWORD: `${Prefix}/auth/reset-password`
    }
  },

  PRIVATE: {
    TRANG_CHU: `${Prefix}/trang-chu`,
    QUAN_LY_HE_THONG: {
      QUAN_LY_NGUOI_DUNG: `${Prefix}/quan-ly-he-thong/quan-ly-nguoi-dung`,
      QUAN_LY_BENH_NHAN: `${Prefix}/quan-ly-he-thong/quan-ly-benh-nhan`,
      QUAN_LY_TRUNG_TAM: `${Prefix}/quan-ly-he-thong/quan-ly-trung-tam`
    }
  }
}
