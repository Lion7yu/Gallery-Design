const expect = chai.expect;
import Vue from 'vue' //浏览器不认得，翻译Vue
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false
// describe 和 it 来源于 Mocha
describe('Popover', () => { //it 用于隔离作用域
    // BDD 行为驱动测试
    //it has ...
    it('存在.', () => {
        expect(Popover).to.exist
    })
    it('可以设置position.', (done) => {
      Vue.component('g-popover',Popover)
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
      <g-popover position="bottom" ref="a">
        <template slot="content">
          弹出内容
        </template>
        <button>fuck me</button>
      </g-popover>
      `
      const vm = new Vue({
        el:div
      })
      vm.$el.querySelector('button').click()
      vm.$nextTick(()=>{
        const {contentWrapper} = vm.$refs.a.$refs
        expect(contentWrapper.classList.contains('position-bottom')).to.be.true
        done()
      })
    })
    xit('可以设置 trigger',(done)=>{
      Vue.component('g-popover',Popover)
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
      <g-popover trigger="hover" ref="a">
        <template slot="content">
          弹出内容
        </template>
        <button>fuck me</button>
      </g-popover>
      `
      const vm = new Vue({
        el:div
      })
      setTimeout(()=>{
        let event = new Event('mouseenter');
        vm.$el.dispatchEvent(event)
        vm.$nextTick(()=>{
          const {contentWrapper} = vm.$refs.a.$refs
          expect(contentWrapper).to.exist
          done()
        })
      })
    })
})