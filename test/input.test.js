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
      it('接收 value',()=>{
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                value:'1234'
            }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.value).to.equal('1234')
        vm.$destroy()
      })
      it('接收 disabled',()=>{
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                disabled:true
            }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.disabled).to.equal(true)
        vm.$destroy()
      })
      it('接收 disabled',()=>{
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                readonly:true
            }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.readOnly).to.equal(true)
        vm.$destroy()
      })
      it('接收 error',()=>{
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                error:'输入内容错误'
            }
        }).$mount()
        const useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
        const errorMessage = vm.$el.querySelector('.errorMessage')
        expect(errorMessage.innerText).to.equal('输入内容错误')
        vm.$destroy()
      })
    })
})