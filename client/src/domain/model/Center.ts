import type { Meta } from '@/application/dto/response/ResponseCommon'

export interface QueryCenters {
  page?: number
  limit?: number
  centerName?: string
  phone?: string
}

export interface Center {
  CenterID: number
  CenterName: string
  Address: string
  Phone: string
  Email: string
  Status: string
  CreatedAt: string
}

export interface CentersResponse {
  data: Center[]
  meta: Meta
}
