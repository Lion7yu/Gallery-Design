<template>
  <div class="col" :class="colClass" :style="colStyle">
        <slot></slot>
  </div>
</template>
<script>
  let validator = (value)=>{
    let keys = Object.keys(value)
    let valid = true
    keys.forEach(key=>{
    if(!['span','offset'].includes(key)){
      valid = false
      }
    })
    return valid
  }
export default {
  name:'LCol',
  props:{
    span:{
      type:[Number,String]
    },
    offset:{
      type:[Number,String]
    },
    xs:{
      type:Object,
      validator,
    },
    ms:{
      type:Object,
      validator,
    },
    md:{
      type:Object,
      validator,
    },
    lg:{
      type:Object,
      validator,
      },
    xl:{
      type:Object,
      validator,
    },
  },
  data(){
    return{
      gutter:0,
    }
  },
  computed:{
    colClass(){
      let {span,offset,xs,ms,md,lg,xl} = this
      let phoneClass = []
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...(xs && [`col-xs-${xs.span}`]),
        ...(ms && [`col-ms-${ms.span}`]),
        ...(md && [`col-md-${md.span}`]),
        ...(lg && [`col-lg-${lg.span}`]),
        ...(xl && [`col-xl-${xl.span}`]),
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
    @media(max-width:576px){
    $class-prefix:col-xs-; //声明一个class前缀
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{ //插值语法
        width: ($n/24)*100%;
      }
    }
    $class-prefix:offset-xs-; //声明一个class前缀
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{ //插值语法
        margin-left: ($n/24)*100%;
        }
      }
    }
    @media(min-width:576px) and (max-width:768px){
    $class-prefix:col-sm-; //声明一个class前缀
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{ //插值语法
        width: ($n/24)*100%;
      }
    }
    $class-prefix:offset-sm-; //声明一个class前缀
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{ //插值语法
        margin-left: ($n/24)*100%;
        }
      }
    }
    @media(min-width:768px) and (max-width:992px){
    $class-prefix:col-md-; //声明一个class前缀
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{ //插值语法
        width: ($n/24)*100%;
      }
    }
    $class-prefix:offset-md-; //声明一个class前缀
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{ //插值语法
        margin-left: ($n/24)*100%;
        }
      }
    }
    @media(min-width:992px) and (max-width:1200px){
    $class-prefix:col-lg-; //声明一个class前缀
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{ //插值语法
        width: ($n/24)*100%;
      }
    }
    $class-prefix:offset-lg-; //声明一个class前缀
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{ //插值语法
        margin-left: ($n/24)*100%;
        }
      }
    }
    @media(min-width:1201px){
    $class-prefix:col-xl-; //声明一个class前缀
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{ //插值语法
        width: ($n/24)*100%;
      }
    }
    $class-prefix:offset-xl-; //声明一个class前缀
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{ //插值语法
        margin-left: ($n/24)*100%;
        }
      }
    }
  }
</style>