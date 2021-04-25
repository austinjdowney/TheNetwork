<template>
  <div class="adv">
    {{ state.adv }}
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
      state
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
