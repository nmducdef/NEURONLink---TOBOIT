import { Roles } from '@/shared/permissions'

export const Constants = {
  API_TOKEN_STORAGE: 'API_APP_AT_AUTISM_CENTER',
  TAB_STORAGE: 'TAB_LABLINK',
  API_ROLE: 'API_APP_ROLE_AUTISM_CENTER',
  ROLES: [
    {
      label: 'Admin',
      value: Roles.ADMIN
    },
    {
      label: 'Manager',
      value: Roles.MANAGER
    },
    {
      label: 'Viewer',
      value: Roles.VIEWER
    }
  ]
}
