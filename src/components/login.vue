<template>
  <div class="login">
    <!-- v-if="state.activeProfile = state.account.id"-->
    <span class="navbar-text">
      <button
        class="btn btn-outline-primary text-uppercase"
        @click="login"
        v-if="!user.isAuthenticated"
      >
        Login
      </button>

      <div class="dropdown" v-else>
        <div
          class="dropdown-toggle"
          @click="state.dropOpen = !state.dropOpen"
        >
          <!-- <router-link :to="{name: 'ProfilePage', params: {id:state.acount.id}>-->
          <img
            :src="
              user.picture"
            alt="user photo"
            height="180"
            class="rounded-circle d-flex justify-content-center"
          />
        <!--  </router-link>-->
        </div>
        <span class="d-flex justify-content-center">{{ user.name }}</span>
      </div>
    </span>
  </div>
  <div>
    <i class=" login-icon d-flex justify-content-center fab fa-github my-4">
      <!--{{ user.github }}-->
    </i>
  </div>
  <div>
    <i class="login-icon d-flex justify-content-center fab fa-linkedin my-4"></i>
  </div>
  <div>
    <button type="button"
            class="list-group-item list-group-item-action hoverable btn btn-outline-success btn-sm d-flex justify-content-center mb-3"
            @click="logout"
    >
      logout
    </button>
  </div>
</template>

<script>
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
export default {
  name: 'Login',
  setup() {
    const state = reactive({
      dropOpen: false,
      activeProfile: computed(() => AppState.activeProfile),
      account: computed(() => AppState.account)
    })
    return {
      state,
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        await AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>>

<style lang="scss" scoped>
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.btn{
  font-size: 20px;
  border: none;
  background-color: gray;
  text-align: center;
  display: inline-block;
  border-radius: 8px;
  width: 50%;
  margin-left: 5rem
}
.login-icon{
  font-size: 40px;
}
</style>
