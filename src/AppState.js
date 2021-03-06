import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  posts: [],
  activePost: null,
  activePosts: [],
  myPosts: [],
  activeProfile: null,
  results: [],
  likes: null,
  adv: [],
  older: '',
  newer: ''
})
