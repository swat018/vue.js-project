<template>
  <div></div>
</template>

<script>
import ApiMixin from "../api.js"
export default {
  name: "Mixins",
  mixins: [ApiMixin], // 사용할 믹스인 파일을 배열로 등록
  data() {
    return {
      productList: []
    };
  },
  async mounted() {
    this.productList = await this.$callAPI("https://7bfd084d-ea30-4f41-96f8-3c516142cb01.mock.pstmn.io/list", "get");
    console.log(this.productList);
  }
}
</script>
