import { mount } from '@vue/test-utils'
import Counter from '../src/components/Counter.vue'
import expect from 'expect'

describe ('Counter', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Counter)
  })

  it ('defaults to a count of 0', () => {
    expect(wrapper.vm.count).toBe(0)
  })

  it ('increment the count when the button was clicked', () => {
    expect(wrapper.vm.count).toBe(0)

    wrapper.find('.increment').trigger('click')

    expect(wrapper.vm.count).toBe(1)
  })

  it ('decrement the count when the button was clicked', () => {
    expect(wrapper.vm.count).toBe(0)

    // wrapper.find('.increment').trigger('click') // 1
    // wrapper.find('.increment').trigger('click') // 2
    // instead of use set value
    wrapper.setData({
      count: 7
    })

    wrapper.find('.decrement').trigger('click') // 6

    expect(wrapper.vm.count).toBe(6)
  })

  it ('never go below 0', () => {
    expect(wrapper.vm.count).toBe(0)

    expect(wrapper.find('.decrement').hasStyle('display', 'none')).toBe(true)

    wrapper.setData({
      count: 1
    })

    expect(wrapper.find('.decrement').hasStyle('display', 'none')).toBe(false)

    expect(wrapper.vm.count).toBe(1)
  })

  it ('present the current count', () => {
    expect(wrapper.find('.count').html()).toContain(0)

    wrapper.find('button').trigger('click')

    expect(wrapper.find('.count').html()).toContain(1)
  })

})
