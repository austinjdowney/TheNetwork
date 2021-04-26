<template>
  <div class="adv row column-height m-2">
    <div class="col-12" v-if="adv[0] !=null">
      <img class="img-fluid my-2" :src="adv[0].tall" alt="img1">
      <img class="img-fluid my-5" :src="adv[1].tall" alt="img2">
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, onMounted, reactive } from 'vue'
import { advService } from '../services/AdvService'
import { logger } from '../utils/Logger'

export default {
  name: 'Adv',

  setup() {
    const state = reactive({
      adv: computed(() => AppState.adv)
    })
    onMounted(async() => {
      try {
        await advService.getAdv()
      } catch (error) {
        logger.log(error)
      }
    })
    return {
      state,
      adv: computed(() => AppState.adv)
    }
  }
}
</script>

<style lang="
       scss"
       scoped
  >
</style>
