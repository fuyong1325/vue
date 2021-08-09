<template>
  <div>
    <img alt="logo" src="~@/assets/logo.png" />
    <HelloWorld msg="Hello World" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Index',
  components: {
    HelloWorld,
  },
}
</script>
