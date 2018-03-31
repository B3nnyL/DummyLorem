import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
<<<<<<< HEAD
      .to.equal('欢迎来到蛤蟆洞🕳️')
=======
      .to.equal('Welcome to Your Vue.js App')
>>>>>>> f7e3920e9e93a1b354b635fc803c0c5252254312
  })
})
