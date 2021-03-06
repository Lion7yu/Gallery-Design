import Toast from './toast'

let currentToast

export default {
  install(Vue,options){
    Vue.prototype.$toast = function(message,toastOptions){
      if(currentToast){
        currentToast.close()
      }
      currentToast = createToast({
        Vue,
        message,
        propsData:toastOptions,
        onClose:()=>{
          currentToast = null
        }
      }) 
    }
  }
}

/* helpers */
function createToast({Vue,message,propsData,onClose}){//新建一个函数
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({
    propsData:propsData
  })
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on('close',onClose)
  document.body.appendChild(toast.$el)
  return toast
}