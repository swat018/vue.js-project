<template>
  <div>
    <button type="button" @click="setCount(7)">Set 7</button>
    <p>The counter is : {{counter}} </p>
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
    setCount(counter) {
      this.counter = counter;
    }
  }
}
</script>

<style scoped>

</style>