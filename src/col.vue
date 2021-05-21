<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'LCol',
  props:{
    span:{
      type:[Number,String]
    }
  }
}
</script>
<style lang="scss" scoped>
  .col{
    height: 100px;
    background: gray;
    width: 50%;
    border: 1px solid red;

    $class-prefix:col-; //声明一个class前缀
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{ //插值语法
        width: ($n/24)*100%;
      }
    }
  }
</style>