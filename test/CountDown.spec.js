import { mount } from '@vue/test-utils'
import expect from 'expect'
import CountDown from '../src/components/CountDown.vue'

describe ('Countdown', () => {
	beforEach (() => {

	})
})

	// Helper Functions

	let see = (text, selector) => {
		let wrap = selector ? wrapper.find(selector) : wrapper

		expect(wrap.html()).toContain(text)
	}

	let type = (text, selector) => {
		let node = wrapper.find(selector)

		node.element.value = text
		node.trigger('input')
	}

	let click = selector => {
		wrapper.find(selector).trigger('click')
	}
