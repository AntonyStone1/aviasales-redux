/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */
import apiClient from './apiClient'
import PATHS from './Path'


export const getKey = () => apiClient.get(PATHS.getKey)

