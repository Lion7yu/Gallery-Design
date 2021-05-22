<template>
  <div class="col" :class="[span && `col-${span}`,offset && `offset-${offset}`]"
  :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}">
    <div style="border:1px solid green; height:100px">
        <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'LCol',
  props:{
    span:{
      type:[Number,String]
    },
    offset:{
      type:[Number,String]
    },
  },
  data(){
    return{
      gutter:0
    }
  },
  created(){
    console.log('col created')
  },
  mounted(){
    console.log('col mounted')
  }
}
</script>
<style lang="scss" scoped>
  .col{
    width: 50%;

    $class-prefix:col-; //声明一个class前缀
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{ //插值语法
        width: ($n/24)*100%;
      }
    }
    $class-prefix:offset-; //声明一个class前缀
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{ //插值语法
        margin-left: ($n/24)*100%;
      }
    }
  }
</style>