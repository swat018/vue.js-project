<template>
 <h1>Full Name : {{fullName}}</h1>
</template>

<script>
export default {
  name: "Watch",
  data() {
    return {
      firstName: 'Jinwoo',
      lassName: 'Park',
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
  }
}
</script>
