import { AppState } from '../AppState'
import { api } from './AxiosService'

class AdvService {
  async getAdv() {
    const res = await api.get('api/ads')
    AppState.adv = res.data
  }
}

export const advService = new AdvService()
