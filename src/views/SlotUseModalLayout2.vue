<template>
  <modal-layout>
    <template #header>
      <h1>팝업 타이틀</h1>
    </template>
    <template #default>
      <p>팝업 컨텐츠</p>
      <P>팝업 컨텐츠</P>
    </template>
    <template #footer>
      <button type="button">닫기</button>
    </template>
  </modal-layout>
</template>
<script>
  import ModalLayout from './SlotModalLayout';
  export default {
  components: {'modal-layout':ModalLayout}
}
</script>