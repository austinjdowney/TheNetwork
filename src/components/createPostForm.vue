<template>
  <div class="post-form">
    <form>
      <div class="form-group">
        <img class="rounded-circle" :src="account.picture" alt="" />
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Got Something To Say??..."></textarea>
      </div>
      <button class="btn btn-success btn-sm">
        Create Post
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PostForm',
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
