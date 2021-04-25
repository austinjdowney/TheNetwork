import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ProfileService {
  async getProfileById(id) {
    try {
      const res = await api.get('api/profiles/' + id)
      AppState.activeProfile = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async getAllPosts() {
    const res = await api.get('api/posts')
    AppState.posts = res.data.posts
  }

  async getMyPosts() {
    const res = await api.get(`api/posts?creatorId=${AppState.account.id}`)
    AppState.myPosts = res.data
  }

//  async getProfilesByQuery(query) {
//    const res = await api.get(query)
//    AppState.results = res.data.results.map(p => new Result(p))
//  }
}

export const profileService = new ProfileService()
