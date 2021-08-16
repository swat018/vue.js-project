<template>
  <div>
    <button type="button" @click="one(), two()">Click</button>
  </div>
</template>

<script>
export default {
  name: "EventClick",
  data(){
    return {
      counter: 0
    };
  },
  methods: {
    one(){
      alert('One');
    },
    two(){
      alert('Two');
    }
  }
}
</script>

<style scoped>

</style>