import apiClient from './apiClient'
import PATHS from './Path'

export const getKey = () => apiClient.get(PATHS.getKey)
