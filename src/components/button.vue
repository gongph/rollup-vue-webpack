<template>
  <button class="btn btn-success" @click="handleClick">{{buttonText}}</button>
</template>

<script>
  export default {
    props: {
      buttonText: {
        type: String,
        default: '按钮'
      }
    },
    methods: {
      handleClick () {
        alert('hello')
      }
    }
  }
</script>