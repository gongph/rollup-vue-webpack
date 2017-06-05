import button from './components/button.vue'

export default {
  install (Vue, params) {
    params = params || {}

    Vue.mixin({
      components: {
        'v-button': button
      }
    })
  }
}