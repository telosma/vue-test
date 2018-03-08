import { mount } from '@vue/test-utils'
import Countdown from '../src/components/Countdown.vue'
import moment from 'moment'
import expect from 'expect'
import sinon from 'sinon'

describe ('Countdown', () => {
    let wrapper, clock

    beforeEach (() => {
        clock = sinon.useFakeTimers()
        wrapper = mount(Countdown)
    })

    afterEach (() => clock.restore)

    it.only ('renders a Countdown timer', () => {
        console.log(new Date())
        wrapper.setProps({ until: moment().add(10, 'seconds') })

        see('0 Days')
        see('0 Hours')
        see('0 Minutes')
        see('10 Seconds')
    })

    it.only ('reduces the countdown every second', () => {
        wrapper.setProps({ until: moment().add(10, 'seconds') })

        see('10 Seconds')
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
