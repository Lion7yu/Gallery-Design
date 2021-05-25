const expect = chai.expect;
import Vue from 'vue' 
import Tabs from '../src/tabs'
import TabsNav from '../src/tabs-nav'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-nav',TabsNav)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => { 
    it('存在.', () => {
        expect(Tabs).to.exist
    })

    it('接收 selected 属性',(done)=>{
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
      <g-tabs selected="math">
      <g-tabs-nav>
          <g-tabs-item name="chinese">
              语文
          </g-tabs-item>
          <g-tabs-item name="math">
              数学
          </g-tabs-item>
          <g-tabs-item name='foreign'>
              外语
          </g-tabs-item>
      </g-tabs-nav>
      <g-tabs-body>
          <g-tabs-pane name="chinese">
              三国演义
          </g-tabs-pane>
          <g-tabs-pane name="math">
              勾股定理
          </g-tabs-pane>
          <g-tabs-pane name='foreign'>
              八嘎雅鹿
          </g-tabs-pane>
      </g-tabs-body>
  </g-tabs>
      `
    let vm =  new Vue({
      el:div
    })
    vm.$nextTick(()=>{
      let x = vm.$el.querySelector(`.tabs-item[data-name="math"]`)
      expect(x.classList.contains('active')).to.be.true
      done()
    })
  })

  it('可以接收 direction prop',()=>{
    
  })
})