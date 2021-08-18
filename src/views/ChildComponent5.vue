<template>
  <button type="button" @click="ChildFunc" ref="btn">자식 컴포넌트 데이터 변경</button>
</template>

<script>
export default {
  name: "ChildComponent5",
  data() {
    return {
      msg: '메시지'
    };
  },
  methods: {
    childFunc() {
      this.msg = '변경된 메시지';
    }
  }
}
</script>