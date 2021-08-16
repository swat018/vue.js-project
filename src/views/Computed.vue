<template>
  <h1>Full Name : {{fullName}}</h1>
</template>

<script>
export default {
  name: "Computed",
  data() {
    return {
      firstName: 'Jinwoo',
      lastName: 'Park'
    };
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
}
</script>
