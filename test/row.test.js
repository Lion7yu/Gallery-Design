const expect = chai.expect;
import Vue from 'vue' //浏览器不认得，翻译Vue
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false
// describe 和 it 来源于 Mocha
describe('Row', () => { //it 用于隔离作用域
    // BDD 行为驱动测试
    //it has ...
    it('存在.', () => {
        expect(Row).to.exist
    })
    it('接收 gutter 属性.', (done) => {
      Vue.component('g-row',Row)
      Vue.component('g-col',Col)
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
      <g-row gutter="20">
        <g-col span="12"></g-col>
        <g-col span="12"></g-col>
        <g-col></g-col>
      </g-row>
      `
      const vm = new Vue({
        el:div
      })
      setTimeout(()=>{
        const row = vm.$el.querySelector('.row')
        expect(getComputedStyle(row).marginLeft).to.eq('-10px')
        expect(getComputedStyle(row).marginRight).to.eq('-10px')
        const cols = vm.$el.querySelectorAll('.col')
        expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
        expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
        done()
        vm.$el.remove()
        vm.$destroy()
      })
  })
  it('接收 align 属性',()=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
        propsData: {
            align: 'right'
        }
    }).$mount(div)
    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.equal('flex-end')
    div.remove()
    vm.$destroy()
  })
})