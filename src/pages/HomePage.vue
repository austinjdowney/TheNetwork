<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <Post v-for="post in state.posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { profileService } from '../services/ProfileService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      posts: computed(() => AppState.posts)
    })
    onMounted(async() => {
      try {
        await profileService.getAllPosts()
      } catch (error) {
        logger.log(error)
      }
    })
    return {
      state
    }
  }
}

</script>
<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
