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
    this.$children.forEach((vm)=>{
      if(vm.$options.name === 'LTabsNav'){
        vm.$children.forEach((childVm)=>{
          if(childVm.$options.name === 'LTabsItem' && childVm.name === this.selected){
            this.eventBus.$emit('update:selected',this.selected,item)
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