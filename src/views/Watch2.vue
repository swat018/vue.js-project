<template>
  <h1>Full Name : {{fullName}}</h1>
  <button type="button" @click="changeName">변경</button>
</template>

<script>
export default {
  name: "Watch2",
  data() {
    return {
      firstName: 'Jinwoo',
      lastName: 'Park',
      fullName: ''
    };
  },
  watch: {
    firstName() {
      this.fullName = this.firstName + ' ' + this.lastName;
    },
    lastName() {
      this.fullName = this.firstName + ' ' + this.lastName;
    }
  },
  methods: {
    changeName() {
      this.firstName = 'Seojin';
    }
  }
}
</script>

<style scoped>

</style>