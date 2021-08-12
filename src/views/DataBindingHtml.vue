<template>
  <div>
    <div>{{htmlString}}</div>
    <div v-html="htmlString"></div>
  </div>
</template>

<script>
export default {
  name: "DataBindingHtml",
  data() {
    return {
      htmlString: '<p style="color:red;">This is a red string.</p>'
    };
  }
}
</script>

<style scoped>

</style>