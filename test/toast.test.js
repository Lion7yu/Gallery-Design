const expect = chai.expect;
import Sinon from 'sinon';
import Vue from 'vue' //浏览器不认得，翻译Vue
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false
// describe 和 it 来源于 Mocha
describe('Toast', () => { //it 用于隔离作用域
    // BDD 行为驱动测试
    //it has ...
    it('存在.', () => {
        expect(Toast).to.exist
    })
    describe('props',function(){
      this.timeout(15000)
      it('接收 autoClose',(done)=>{
        let div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
          propsData:{
            autoClose:1,
          }
        }).$mount(div)
        vm.$on('close',()=>{
          expect(document.body.contains(vm.$el)).to.eq(false)
          done()
        })
      })
      it('接收 closeButton',(done)=>{
        const callback = sinon.fake()
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
          propsData:{
            closeButton:{
              text:'关闭',
              callback,
            },
          }
        }).$mount()
        let closeButton = vm.$el.querySelector('.close')
        expect(closeButton.textContent.trim()).to.eq('关闭')
        setTimeout(()=>{
          closeButton.click()
          expect(callback).to.have.been.called
          done()
        },200)

      })
      it('接收 enableHtml',()=>{
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
          propsData:{enableHtml:true}
        })
        vm.$slots.default=['<strong id="test">大帅逼</strong>']
        vm.$mount()
        let strong = vm.$el.querySelector('#test')
        expect(strong).to.exist
      })
      it('接收 position',()=>{
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
          propsData:{
            position:'bottom'
          }
        }).$mount()
        expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
      })
    })
})