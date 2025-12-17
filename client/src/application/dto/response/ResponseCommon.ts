export interface ResponseCommon<T> {
  statusCode: number
  message: string
  results: T
}

export interface Meta {
  page: string
  limit: string
  total: number
  totalPages: number
}
