import Vue from "vue";
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Content from './content'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-content',Content)
Vue.component('g-layout',Layout)
Vue.component('g-sider',Sider)
Vue.component('g-header',Header)
Vue.component('g-footer',Footer)
Vue.component('g-toast',Toast)
Vue.use(plugin)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        message:'hi'
    },
    created(){

    },
    methods:{
        showToast1(){
            this.showToast('top')
        },
        showToast2(){
            this.showToast('middle')
        },
        showToast3(){
            this.showToast('bottom')
        },
        showToast(position){
            this.$toast(`你是<strong>大帅逼</strong>?,帅气值为 ${parseInt(Math.random()*100)}`,{
                position,
                enableHtml:false,
                closeButton:{
                    text:'我是',
                    callback(){
                        console.log('两个大帅逼')
                    }
                },
                autoClose:3,
            })
        }
    }
})
