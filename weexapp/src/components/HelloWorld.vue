<template>
<div>
  <text class="message">Now, let's use Vue.js to build your Weex app.</text>
  <wxc-button :text="message" @wxcButtonClicked="wxcButtonClicked">wwwww</wxc-button>
</div>
</template>
<script>
  import { WxcButton } from 'weex-ui'
  export default {
    components: { WxcButton},
    data() {
      return {
        message: '跳转WeexUiDemo'
      }
    },
    methods: {
      wxcButtonClicked() {
        this.$router.push({path: '/weexUidemo'})
      }
    }
  }
</script>