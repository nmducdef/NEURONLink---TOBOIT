import NetworkException from '@/application/exceptions/NetworkException'
import LocalStorageService from '@/infrastructure/services/LocalStorageServiceImpl'
import { AppRoutes } from '@/shared/appRoutes'
import { Constants } from '@/shared/constants'
import axios, { AxiosError, type AxiosInstance, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios'

interface FormattedError {
  message: string
  error: string
  statusCode: number
}

class HttpClient {
  private instance: AxiosInstance
  private abortController: AbortController | null = null
  private readonly localStorageService: LocalStorageService = new LocalStorageService()
  private readonly TIMEOUT: number

  constructor(baseURL: string, timeout: number = Number(import.meta.env.VITE_APP_TIMEOUT) || 30000) {
    this.TIMEOUT = timeout

    this.instance = axios.create({
      baseURL: baseURL,
      timeout: this.TIMEOUT,
      headers: { 'Content-Type': 'application/json' }
    })

    this.addInterceptors()
    this.abortController = new AbortController()
  }

  private addInterceptors(): void {
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => this.handleRequest(config),
      (error: AxiosError) => Promise.reject(error)
    )

    this.instance.interceptors.response.use(
      (response: AxiosResponse) => this.handleResponse(response),
      (error: AxiosError) => this.handleResponseError(error)
    )
  }

  private handleRequest(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    const token = this.localStorageService.readStorage(Constants.API_TOKEN_STORAGE)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  }

  private handleResponse(response: AxiosResponse): AxiosResponse {
    return response
  }

  private async handleResponseError(error: AxiosError, _: number = 0): Promise<any> {
    if (!error.response) {
      throw new NetworkException('Network error occurred')
    }
    const { status } = error.response
    if (status === 401) return this.handle401Error(error)
    if (status === 403) return this.handle403Error(error)
    throw this.formatError(error.response.data as AxiosError)
  }

  private async handle403Error(_: AxiosError): Promise<any> {
    window.location.assign(AppRoutes.FORBIDDEN_ACCESS)
  }

  private async handle401Error(_: AxiosError): Promise<any> {
    return this.handleLogout()
  }

  private handleLogout(): void {
    this.localStorageService.removeStorage(Constants.API_TOKEN_STORAGE)
    window.location.assign(AppRoutes.PUBLIC.AUTH.LOGIN)
  }

  private formatError(error: any): FormattedError {
    return {
      message: error.message || 'An error occurred',
      statusCode: error.statusCode,
      error: error.error
    }
  }

  public createAbortSignal(): AbortSignal {
    this.abortController = new AbortController()
    return this.abortController?.signal
  }

  public cancelRequests(): void {
    if (!this.abortController) {
      this.abortController = new AbortController()
    }
    this.abortController.abort()
    this.abortController = new AbortController()
  }

  public getAxiosInstance(): AxiosInstance {
    return this.instance
  }
}

export const mainApiClient = new HttpClient(import.meta.env.VITE_APP_API_URL)
export const printApiClient = new HttpClient(import.meta.env.VITE_APP_PRINT_API_URL)

export default mainApiClient
