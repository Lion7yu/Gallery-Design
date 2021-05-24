import Toast from './toast'

let currentToast

export default {
  install(Vue,options){
    Vue.prototype.$toast = function(message,toastOptions){
      if(currentToast){
        currentToast.close()
      }
      currentToast = createToast({Vue,message,propsData:toastOptions}) 
    }
  }
}

/* helpers */
function createToast({Vue,message,propsData}){//新建一个函数
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({
    propsData:propsData
  })
  toast.$slots.default = [message]
  toast.$mount()
  document.body.appendChild(toast.$el)
  return toast
}