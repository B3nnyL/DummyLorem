import Vue from 'vue'
import { shallow } from '@vue/test-utils'

import Book from '@/components/Book.vue'

describe('Book.vue', () => {
  it('should initially render one paragraph', () => {
    const Constructor = Vue.extend(Book)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.lines').textContent)
      .to.equal('\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at tellus at. Lectus sit amet est placerat. Vitae turpis massa sed elementum tempus egestas. Nisi porta lorem mollis aliquam. Enim eu turpis egestas pretium aenean pharetra. Molestie nunc non blandit massa enim. Id ornare arcu odio ut sem nulla pharetra diam sit. Accumsan tortor posuere ac ut. Sit amet purus gravida quis. Sed felis eget velit aliquet sagittis id consectetur. Vitae auctor eu augue ut lectus arcu bibendum at varius. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.\n\n\n    ')
  })

  it('should initially para ', () => {
    const Constructor = Vue.extend(Book)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.form-row #paragraph').value)
      .to.equal('on')
  })
  it('count should set to 1 ', () => {
    const Constructor = Vue.extend(Book)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.form-row #count').value)
      .to.equal('1')
  })

  it('count label should be paragraphs', () => {
    const Constructor = Vue.extend(Book)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.form-row .countLbl').textContent)
    .to.equal('How many paragraphs')
  })

  it('select words, count label should be lists', () => {
    const Constructor = Vue.extend(Book)
    const vm = new Constructor().$mount()
    vm.showList = true
    Vue.nextTick(() => {
      expect(vm.showParagraph).to.equal(false)
      expect(vm.$el.querySelector('.form-row .countLbl').textContent)
      .to.equal('How many lists')
    })
  })

  it('select words, input 2, count label should be words, copyboard shows Lorem ipsum', () => {
    const Constructor = Vue.extend(Book)
    const vm = new Constructor().$mount()
    vm.showFragment = true
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.form-row .countLbl').textContent)
      .to.equal('How many words')
    })
    vm.count = 2
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.lines').textContent)
      .to.equal('Lorem ipsum')
    })
  })
})
