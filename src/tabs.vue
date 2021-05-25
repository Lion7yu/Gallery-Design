<template>
  <div class="tabs">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name:'LTabs',
  props:{
    selected:{
      type:String,
      require:true
    },
    direction:{
      type:String,
      default:'horizontal',
      validator(value){
        return ['horizontal','vertical'].indexOf(value) >= 0
      }
    }
  },
  data(){
    return{
      eventBus:new Vue()
    }
  },
  provide(){
    return{
      eventBus:this.eventBus
    }
  },
  mounted(){
    if(this.$children.length === 0){
      console && console.warn && 
      console.warn('tabs 未添加子组件，tabs 子组件类型应为 tabs-nav 和 tabs-body.')
    }
    this.$children.forEach((vm)=>{
      if(vm.$options.name === 'LTabsNav'){
        vm.$children.forEach((childVm)=>{
          if(childVm.$options.name === 'LTabsItem' && childVm.name === this.selected){
            this.eventBus.$emit('update:selected',this.selected,childVm)
          }
        })
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .tabs{

  }
</style>