<template>
  <div class="profile text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded-circle" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div>
</template>

<script>
import { profileService } from '../services/ProjectsService'
import { accountService } from '../services/AccountService'
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
export default {
  name: 'Profile',
  setup() {
    const route = useRoute()
    const state = reactive({
      newPost: {},
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),
      activeProfile: computed(() => AppState.activeProfile),
      activePosts: computed(() => AppState.activePosts)
    })

    onMounted(async() => {
      await accountService.getByAccountId(route.params.id)
      await accountService.editByAccountId(route.params.id)
      // searching for certain profiles?
      await profileService.getProfilesByQuery(route.params)
      await profileService.getProfileById(route.params.id)
      await profileService.getProfilesById(route.params.id)
    })

    return {
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
