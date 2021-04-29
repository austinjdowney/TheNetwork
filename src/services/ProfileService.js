import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
// import router from '../router'
class ProfileService {
  async getProfile(id) {
    try {
      const res = await api.get('api/profiles/' + id)
      AppState.activeProfile = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async getMyPosts() {
    debugger
    const res = await api.get(`api/posts?creatorId=${AppState.account.id}`)
    AppState.activePosts = res.data
  }

  async create() {
    const res = await api.post('api/posts')
    // router.push({ name: 'ProfilePage', params: { id: res.data.id } })
    AppState.posts = [...AppState.posts, res.data]
  }

  async getResults(query) {
    const res = await api.get(`api/posts?query=${query}`)
    AppState.results = res.data.posts
    // create search results page to push query to
  }
}

export const profileService = new ProfileService()
