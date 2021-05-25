<template>
  <div class="tabs-nav">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'LTabsNav',
  inject:['eventBus'],
  created(){
  }
}
</script>

<style lang="scss" scoped>
  $tab-height:40px;
  .tabs-nav{
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    border:1px solid red;
    > .actions-wrapper{
      margin-left: auto;
    }
  }
</style>