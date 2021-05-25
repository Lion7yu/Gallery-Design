<template>
  <div class="tabs">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
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
  created(){
    this.$emit('update:selected','xxx')
  }
}
</script>

<style lang="scss" scoped>
  .tabs{

  }
</style>