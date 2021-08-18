<template>
  <child-component @send-message="sendMessage" ref="child_component" />
</template>

<script>
import ChildComponent from "@/views/ChildComponent2";
export default {
  name: "ParentComponent2",
  components: {ChildComponent},
  mounted () {
    this.$refs.child_component.callFromParent();
  }
}
</script>