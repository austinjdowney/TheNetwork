<template>
  <div class="post card">
    <div class="row">
      <div class="col-md-3" v-if="post.creator">
        <router-link
          :to="{name:'ProfilePage', params: {id:post.id}}"
        >
          <img
            :src="post.creator.picture"
            alt="user photo"
            height="40"
            class="rounded-circle"
          />
          <i v-if="post.creator.graduated" class="fas fa-user-graduate"></i>
        </router-link>
      </div>
      <div class="col-md-9">
        <div>
          <p>{{ post.creator.name }}</p>
          <p>{{ post.createdAt }}</p>
          <!--<p> DateTime.now({{ post.createdAt }})</p>-->
        </div>
        <div class="card-body">
          <div>
            <img :src="post.imgUrl" class="w-100" alt="">
          </div>
          <p class="card-text">
            {{ post.body }}
          </p>
        </div>
      </div>
      <div class="ml-3">
        <button type="button"
                class="btn btn-outline-danger"
                @click="likePost(post)"
        >
          <i
            class="far fa-heart"
          >
          </i>
          {{ post.likes.length }}
        </button>
      </div>
      <div class="post--buttons d-flex justify-content-between pt-3">
        <button class="shadow" @click="deletePost(post)">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { postsService } from '../services/PostsService'
import Notification from '../utils/Notification'
// import { DateTime, LocalZone } from 'luxon'

export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup() {
    // DateTime.now(LocalZone)
    return {
      async likePost(post) {
        try {
          await postsService.likePost(post.id)
          Notification.toast('Successfully Created Post', 'success')
        } catch (error) {
          Notification.toast('Error: ' + error, ' danger')
        }
      },
      async deletePost(post) {
        try {
          await postsService.deletePost(post.id)
        } catch (error) {
          Notification.toast('Error: ' + error, ' danger')
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
