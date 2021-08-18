<template>
  <child-component @send-message="sendMessage" />
</template>

<script>
import ChildComponent from './ChildComponent4'
export default {
  name: "ParentComponent4",
  components: {ChildComponent},
  methods: {
    sendMessage(data) {
      console.log(data);
    }
  }
}
</script>