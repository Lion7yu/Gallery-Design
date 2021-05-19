<template>
  <!-- 如果存在error就有error类 -->
  <div class="wrapper" :class="{error}">
    <input v-bind:value="value" type="text" :disabled="disabled" :readonly="readonly">
    <template v-if="error">
      <Icon name="error" class="icon-error"></Icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

<script>
import Icon from './icon'
export default {
  components:{Icon},
  name:'l-input',
  props:{
    value:{
      type:String,
    },
    disabled:{
      type:Boolean,
      default:false
    },
    readonly:{
      type:Boolean,
      default:false
    },
    error:{
      type:String,
    }
  }
}
</script>

<style lang="scss" scoped>
  $height:32px;
  $border-color:#999;
  $border-radius:4px;
  $font-size:14px;
  $box-shadow-color:rgba(0,0,0,0.5);
  $red: #F1453D;
  .wrapper{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: $font-size;
    >:not(:last-child){margin-right: .4em;}
    > input{
      height: $height;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 0 8px;
      font-size: inherit;
      &:hover{
        border-color: #666;
      }
      &:focus{
        box-shadow: inset 0 1px 3px $box-shadow-color;
        outline: none;
      }
      &[disabled]{
        border-color: #bbb;
        color: #bbb;
        cursor: not-allowed;
      }
      &[readonly]{
        border-color: #bbb;
        color: #bbb;
      }
    }
    &.error{
     > input{
       border-color: $red;
     }
    }
    .icon-error{
      fill:$red
    }
    .errorMessage{
      color:$red
    }
  }
</style>