const expect = chai.expect;
import Vue from 'vue' //浏览器不认得，翻译Vue
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false
// describe 和 it 来源于 Mocha
describe('Col', () => { //it 用于隔离作用域
    // BDD 行为驱动测试
    //it has ...
    it('存在.', () => {
        expect(Col).to.exist
    })
  it('接收 span 属性',()=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
        propsData: {
            span: 1
        }
    }).$mount(div)
    const element = vm.$el
    expect(vm.$el.classList.contains('col-1')).to.equal(true)
    div.remove()
    vm.$destroy()
  })
  it('接收 offset 属性',()=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
        propsData: {
            offset: 1
        }
    }).$mount(div)
    const element = vm.$el
    expect(vm.$el.classList.contains('offset-1')).to.equal(true)
    div.remove()
    vm.$destroy()
  })
  it('接收 xl 属性',()=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
        propsData: {
            xl: {span:1 ,offset:2}
        }
    }).$mount(div)
    const element = vm.$el
    expect(vm.$el.classList.contains('col-xl-1')).to.equal(true)
    expect(vm.$el.classList.contains('offset-xl-2')).to.equal(true)
    div.remove()
    vm.$destroy()
  })
  it('接收 xs 属性',()=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
        propsData: {
            xs: {span:1 ,offset:2}
        }
    }).$mount(div)
    const element = vm.$el
    expect(vm.$el.classList.contains('col-xs-1')).to.equal(true)
    expect(vm.$el.classList.contains('offset-xs-2')).to.equal(true)
    div.remove()
    vm.$destroy()
  })
  it('接收 sm 属性',()=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
        propsData: {
            sm: {span:1 ,offset:2}
        }
    }).$mount(div)
    const element = vm.$el
    expect(vm.$el.classList.contains('col-sm-1')).to.equal(true)
    expect(vm.$el.classList.contains('offset-sm-2')).to.equal(true)
    div.remove()
    vm.$destroy()
  })
  it('接收 md 属性',()=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
        propsData: {
            md: {span:1 ,offset:2}
        }
    }).$mount(div)
    const element = vm.$el
    expect(vm.$el.classList.contains('col-md-1')).to.equal(true)
    expect(vm.$el.classList.contains('offset-md-2')).to.equal(true)
    div.remove()
    vm.$destroy()
  })
  it('接收 lg 属性',()=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
        propsData: {
            lg: {span:1 ,offset:2}
        }
    }).$mount(div)
    const element = vm.$el
    expect(vm.$el.classList.contains('col-lg-1')).to.equal(true)
    expect(vm.$el.classList.contains('offset-lg-2')).to.equal(true)
    div.remove()
    vm.$destroy()
  })
  it('接收 xl 属性',()=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
        propsData: {
            xl: {span:1 ,offset:2}
        }
    }).$mount(div)
    const element = vm.$el
    expect(vm.$el.classList.contains('col-xl-1')).to.equal(true)
    expect(vm.$el.classList.contains('offset-xl-2')).to.equal(true)
    div.remove()
    vm.$destroy()
  })
  it('接收 xxl 属性',()=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
        propsData: {
            xxl: {span:1 ,offset:2}
        }
    }).$mount(div)
    const element = vm.$el
    expect(vm.$el.classList.contains('col-xxl-1')).to.equal(true)
    expect(vm.$el.classList.contains('offset-xxl-2')).to.equal(true)
    div.remove()
    vm.$destroy()
  })
})