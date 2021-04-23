import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ProfileService {
  async getProfile(id) {
    try {
      const res = await api.get('api/profiles/' + id)
      AppState.activeProfile = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
}

export const profileService = new ProfileService()
