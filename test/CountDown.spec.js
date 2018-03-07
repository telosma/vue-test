import { mount } from '@vue/test-utils'
import Countdown from '../src/components/Countdown.vue'
import moment from 'moment'
import expect from 'expect'

describe ('Countdown', () => {
    let wrapper

    beforeEach (() => {
        wrapper = mount(Countdown)
    })

    it.only ('renders a Countdown timer', () => {
        wrapper.setProps({ util: moment().add(10, 'seconds') })

        see('10 seconds')
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

})
