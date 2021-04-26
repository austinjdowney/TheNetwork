<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <Post v-for="post in state.posts" :key="post.id" :post="post" />
  </div>
  <div v-if="state.previous">
    <button type="button" @click="getAll(older)">
      <i class="fas fa-backward"></i>
    </button>
  </div>
  <div v-if="state.next">
    <button type="button" @click="getAll(newer)">
      <i class="fas fa-forward"></i>
    </button>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { postsService } from '../services/PostsService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      posts: computed(() => AppState.posts),
      older: computed(() => AppState.older),
      newer: computed(() => AppState.newer)
    })
    onMounted(async() => {
      try {
        await postsService.getAll()
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
