import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AdvService {
  async getAdv() {
    try {
      const res = await api.get('api/ads/')
      AppState.adv = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
}

export const advService = new AdvService()
