<template>
  <div>
    <page-title :title="title" />
  </div>
</template>

<script>
import PageTitle from '../components/PageTitle';  // 컴포넌트 import
export default {
  name: "NestedComponent",
  components: {PageTitle},                        // 현재 컴포넌트에서 사용할 컴포넌트 등록
  data() {
    return {
      title: '동적 페이지 타이틀'
    };
  }
}
</script>