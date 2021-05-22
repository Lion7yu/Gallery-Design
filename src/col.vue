<template>
  <div class="col" :class="colClass" :style="colStyle">
        <slot></slot>
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
      gutter:0,
    }
  },
  computed:{
    colClass(){
      let {span,offset} = this
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`
        ]
    },
    colStyle(){
      return{
      paddingLeft:this.gutter / 2 + 'px',
      paddingRight:this.gutter / 2 + 'px',
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .col{
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