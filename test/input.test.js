const expect = chai.expect;
import Vue from 'vue' //浏览器不认得，翻译Vue
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false
// describe 和 it 来源于 Mocha
describe('Input', () => { //it 用于隔离作用域
    // BDD 行为驱动测试
    //it has ...
    it('存在.', () => {
        expect(Input).to.exist
    })
    describe('props',()=>{
      const Constructor = Vue.extend(Input)
      let vm
      afterEach(function(){
        vm.$destroy()
      })
      it('接收 value',()=>{
        vm = new Constructor({
          propsData: {
            value:'1234'
          }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.value).to.equal('1234')
      })
      it('接收 disabled',()=>{
        vm = new Constructor({
          propsData: {
            disabled:true
          }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.disabled).to.equal(true)
      })
      it('接收 disabled',()=>{
        vm = new Constructor({
          propsData: {
            readonly:true
          }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.readOnly).to.equal(true)
      })
      it('接收 error',()=>{
        vm = new Constructor({
          propsData: {
            error:'输入内容错误'
          }
        }).$mount()
        const useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
        const errorMessage = vm.$el.querySelector('.errorMessage')
        expect(errorMessage.innerText).to.equal('输入内容错误')
      })
    })
    describe('事件',()=>{
      const Constructor = Vue.extend(Input)
      let vm
      afterEach(function(){
        vm.$destroy()
      })
      it('支持 change/input/focus/blur 事件',()=>{
        ['change','input','focus','blur'].forEach((eventName)=>{
          vm = new Constructor({}).$mount()
          const callback = sinon.fake()
          vm.$on(eventName,callback)
          //触发 input 的 change 事件
          let event = new Event(eventName);//触发一个change事件之后，回调会被调用，参数为 event
          let inputElement = vm.$el.querySelector('input')
          inputElement.dispatchEvent(event)
          expect(callback).to.have.been.calledWith(event)
        })
      })
    })
})