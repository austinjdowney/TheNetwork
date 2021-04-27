import { AppState } from '../AppState'
import { api } from './AxiosService'
import router from '../router'

class PostsService {
  async getAll() {
    const res = await api.get('api/posts')
    AppState.posts = res.data.posts
    AppState.older = res.data.older
    AppState.newer = res.data.newer
  }

  async createPost(newPost) {
    const res = await api.post('api/posts', newPost)
    router.push({ name: 'ProfilePage', params: { id: res.data.id } })
  }

  async likePost(id) {
    await api.post(`api/posts/${id}/like`)
    this.getAll()
  }

  async deletePost(id) {
    await api.delete('api/posts/' + id)
    AppState.posts = AppState.posts.filter(p => p.id !== id)
  }
}
export const postsService = new PostsService()
