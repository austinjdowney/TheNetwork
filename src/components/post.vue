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
        </router-link>
      </div>
      <div class="col-md-9">
        <div>
          <p>{{ post.creator.name }}</p>
          <p> {{ post.createdAt }}</p>
        </div>
        <div class="card-body">
          <p class="card-text">
            {{ post.body }}
          </p>
        </div>
      </div>
      <span>
        <i class="far fa-heart"></i>
        {{ post.likes.length }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
