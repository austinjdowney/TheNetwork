<template>
  <div class="profile-page text-center" v-if="state.activeProfile=== state.account">
    <!-- Render the active profile picture and name -->
    <div class="card col-10">
      <div class="card-header d-flex">
        <!--insert cover image-->
      </div>
      <!-- <div>
        <CreatePostForm />
      </div> -->
      <div class="card-body">
        <img class="rounded-circle" :src="state.activeProfile.picture" alt="Creator image">
        <div class="ml-3 d-flex flex-column justify-content-center">
          <h3 class="text-secondary">
            {{ state.activeProfile.name }}
          </h3>
          <h3 class="m-0">
            Posts: {{ state.activePosts.length }}
          </h3>
        </div>
      </div>
    </div>
    <form @submit.prevent="create" v-if="state.user.isAuthenticated && state.activeProfile.id === state.account.id">
      <div class="form-group">
        <input type="text"
               class="form-control"
               name="body"
               id="body"
               aria-describedby="helpId"
               placeholder="GOT SOMETHING TO SAY??..."
               v-model="state.newPost.body"
        >
        <label for="imgUrl">Image</label>
        <input type="text"
               class="form-control"
               name="imgUrl"
               id="imgUrl"
               aria-describedby="helpId"
               placeholder="Image Url..."
               v-model="state.newPost.imgUrl"
        >
      </div>
      <button type="submit" class="btn btn-success">
        Create
      </button>
    </form>
    <h2>My Projects</h2>
    <div class="row">
      <Post v-for="myPost in state.myPosts" :key="myPost.id" :my-post="myPost" />
    </div>
  </div>
</template>

<script>
import { profileService } from '../services/ProfileService'
// import { accountService } from '../services/AccountService'
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
import Notification from '../utils/Notification'
import { logger } from '../utils/Logger'
export default {
  name: 'ProfilePage',
  setup() {
    const route = useRoute()
    const state = reactive({
      newPost: {},
      myPost: [],
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),
      activeProfile: computed(() => AppState.activeProfile),
      activePosts: computed(() => AppState.activePosts)
    })

    onMounted(async() => {
      // await accountService.getByAccountId(route.params.id)
      // searching for certain profiles?
      // await profileService.getProfilesByQuery(route.params)
      await profileService.getProfile(route.params.id)
      // await profileService.getAllPosts(route.params.id)
    })

    return {
      route,
      state,
      async create() {
        try {
          await profileService.create(state.data)
          state.newPost = {}
          Notification.toast('Successfully Created Post', 'success')
        } catch (error) {
          logger.log(error)
          Notification.toast('Error: ' + error, 'danger')
        }
      },
      async editPost() {
        try {
          await profileService.put(state.newPost)
          state.newPost = {}
          Notification.toast('Successfully Updated Post', 'success')
        } catch (error) {
          logger.log(error)
          Notification.toast('Error: ' + error, 'danger')
        }
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
