<template class="container-fluid">
  <div class="row">
    <div class="col-3 bg-light">
      <!--inject profile colummn-->
      <Login />
    </div>
    <div class="col-9">
      <header>
        <Navbar />
      </header>
      <main>
        <div class="row">
          <div class="col-9">
            <router-view />
          </div>
          <div class="col-3 bg-white">
            <div>
              <Adv />
            </div>
            <div>
              <Adv />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div class="
                  bg-dark
                  text-light
                  text-center
                  p-4"
        >
          <span>
            Made with lo<i class="fab fa-angellist"></i>e by Austin. feat. Codeworks
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
